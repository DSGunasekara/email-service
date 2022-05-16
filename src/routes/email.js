import express from 'express';
const router = express.Router();

import  { sendEmail } from '../controllers/email.js';

router.post('/', sendEmail);

export default router;