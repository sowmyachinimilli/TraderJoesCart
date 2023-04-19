import express from 'express';
import { addOrderItems } from '../controllers/orderController.js';
import { authUser, registerUser, getUserProfile, updateUserProfile } from '../controllers/userControllers.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(protect, addOrderItems)

export default router;
