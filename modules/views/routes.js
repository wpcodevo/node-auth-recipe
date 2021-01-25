import express from 'express';
import {
  getOverview,
  getLogin,
  getSignup,
  getForgotPassword,
  getResetPassword,
  getRecipes,
} from './controllers/viewsController.js';
import { isLoggedIn, protect } from '../auth/authController.js';

const router = express.Router();

router.use(isLoggedIn);

router.get('/', getOverview);

router.get('/login', getLogin);
router.get('/signup', getSignup);
router.get('/recipes', protect, getRecipes);
router.get('/forgotPassword', getForgotPassword);
router.get('/resetPassword/:token', getResetPassword);

export default router;
