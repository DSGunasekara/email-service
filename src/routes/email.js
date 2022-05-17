import express from 'express';
const router = express.Router();

import  { createEmail } from '../controllers/email.js';

router.post('/', createEmail);

export default router;