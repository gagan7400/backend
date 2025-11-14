const connectDb = require("./config/connectDb.js");
const express = require("express");
const app = express();
const cors = require("cors")
const cookieParser = require("cookie-parser");

let path = require("path")
const dotenv = require("dotenv");
let dotpath = path.join(__dirname, "config/.env")
dotenv.config({ path: dotpath })



// app.use(bodyParser())
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(cookieParser());
connectDb();
let uploadpath = path.join(__dirname, 'uploads');
app.use("/uploads", express.static(uploadpath))


let userRoute = require("./routes/userRoutes.js")
const cartRoute = require("./routes/cartRoutes.js")
const adminRoutes = require("./routes/adminRoutes.js");
const productRoutes = require("./routes/productRoutes.js");



app.use("/api/user", userRoute);

app.use("/api/admin", adminRoutes);
app.use("/api/cart", cartRoute);
app.use("/api/product", productRoutes);


app.use((err, req, res, next) => {
    console.log(err)
    res.send({ success: false, message: err.message })
})
app.listen(process.env.PORT, (err) => {
    console.log(err || " Server Run on Port " + process.env.PORT)
});
