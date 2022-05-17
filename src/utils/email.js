import nodemailer from "nodemailer";
import dotenv from 'dotenv';

dotenv.config();

const sendMail = async(email, subject, message)=>{
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL, // generated ethereal user
          pass: process.env.EMAIL_PASS, // generated ethereal password
        },
      });

  
      //Send email with the message
      let info = await transporter.sendMail({
        from: `"E Commerce" ${process.env.EMAIL}`, // sender address
        to: email, // reciever email
        subject: subject, // Subject line
        html: message
      });
      console.log(info);
}

export default sendMail;