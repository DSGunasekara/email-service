import express from "express";
import sendMail from "../utils/email.js"

const router = express.Router();

//Create a order
export const createEmail = (async(req, res)=>{
    try {        
        
        const { email, subject, message } = req.body;
        //Send email about the order
        sendMail(email, subject, message);

        return res.status(201).send('ok');
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});


export default router;