import express from 'express';
import { getItems, getItem } from '../controllers/items.js';

export const router = express.Router();

router.get('/items', getItems);

router.get('/items/:id', getItem);

export default router;