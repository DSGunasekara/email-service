import express from "express";
import axios from "axios";
import sendMail from "../utils/email.js"

const router = express.Router();

//Create a order
export const createEmail = (async(req, res)=>{
    try {        
        //get the details about the order from the shop service
        const order = await axios.get(`http://localhost:8070/api/order/${req.body._doc._id}`)
        let delivery = new Delivery({...order.data})
        //Send email about the order
        sendMail(delivery);
        await delivery.save()
        return res.status(201).send(delivery);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});


export default router;