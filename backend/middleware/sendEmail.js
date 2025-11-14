const nodemailer = require("nodemailer");

async function sendEmail(email, message, otp) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.MAIL,      // make sure these exist in .env
        pass: process.env.PASSWORD,  // use Gmail App Password, not normal password
      },
    });

    const info = await transporter.sendMail({
      from: process.env.MAIL,
      to: email,
      subject: message || "OTP Verification",
      text: `${message}\nYour OTP is: ${otp}`,
      html: `<h3>${message}</h3><p>Your OTP is: <b>${otp}</b></p>`,
    });

    console.log("Email sent successfully:", info.messageId);
    return info.messageId;

  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

module.exports = sendEmail;
