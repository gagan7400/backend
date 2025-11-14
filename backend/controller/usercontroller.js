let User = require("../model/usermodel")
const bcrypt = require('bcrypt')
let jwt = require("jsonwebtoken")
const sendEmail = require("../middleware/sendEmail")

const getUsers = async (req, res) => {
    try {
        let data = await User.find({});
        res.status(200).json({ success: true, message: "Data get successfully", data })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
const registerUser = async (req, res) => {
    try {
        let { email, password, name, moblieNumber, address, varificationOTP } = req.body;

        let olduser = await User.findOne({ email });

        if (olduser) {
            return res.status(400).json({ success: false, message: 'User Already Registered' })
        } else {
            let image = []
            if (req.files) {
                console.log("files", req.files)
                req.files.map((v, i) => {
                    image.push({ filename: v.filename, path: "http://localhost:4000/" + v.filename })
                })
            } else {
                image = [{ filename: "", path: "" }]
            }
            let hash = await bcrypt.hash(password, 10)
            let otp = Math.floor(Math.random() * 1111) + 1000;
            console.log(otp);
            await sendEmail(email, `Your OTP is ${otp}`, otp);

            let newUser = await User({
                email,
                password: hash,
                name,
                image,
                moblieNumber,
                address,
                varificationOTP: otp
            });
            await newUser.save();
            return res.status(201).json({ success: true, message: 'User Registered Successfully' })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}
const verifyUser = async (req, res) => {
    try {
        console.log(req.body);
        let { email, otp } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: 'User Not Found' })
        } else {
            let date = new Date().getDate();
            if (user.varificationExpire + 60000 * 5 > date) {
                return res.status(400).json({ success: false, message: 'OTP expired' })
            }
            else {
                console.log(otp, user);
                if (otp == user.varificationOTP) {
                    user.isActive = true;
                    await user.save()
                    res.status(200).json({ success: true, message: "user varified successfully" })
                } else {
                    return res.status(400).json({ success: false, message: 'Pls provide valid otp' })

                }
            }
        }

    } catch (error) {

    }
}

const login = async (req, res) => {
    try {
        let { email, password } = req.body;
        console.log(email)
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'please provide all the details' })
        }

        let olduser = await User.findOne({ email })
        if (!olduser) {
            return res.status(400).json({ success: false, message: 'User Not Found' })
        } else {
            if (olduser.isActive) {
                let passMatch = await bcrypt.compare(password, olduser.password)
                if (!passMatch) {
                    return res.status(400).json({ success: false, message: 'please provide valid details' })
                } else {
                    let token = await jwt.sign({ user: olduser, role: "user" }, process.env.SECRET_KEY)
                    return res.status(201).json({ success: true, message: 'User Login Successfully', token })
                }
            } else {
                return res.status(400).json({ success: false, message: 'This User is Deactivate' })
            }

        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}

const deletedata = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await User.findById(id);
        if (!user) {
            return res.status(400).json({ success: false, message: "User Not found" })
        }
        let data = await User.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "User Deleted Successfully" })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
}



module.exports = { getUsers, registerUser, login, verifyUser, deletedata }