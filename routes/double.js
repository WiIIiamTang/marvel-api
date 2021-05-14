import express from 'express';
import { getDouble } from '../controllers/double.js';

const router = express.Router();

router.get('/double', getDouble);

export default router;