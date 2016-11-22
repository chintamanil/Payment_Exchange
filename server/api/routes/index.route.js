import express from 'express';
import userRoutes from './user.route';
import authRoutes from './auth.route';
import itemRouter from './item.route';
import transactionRouter from './transaction.route';

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount user routes at /users
router.use('/transactions', transactionRouter);

// mount user routes at /users
router.use('/items', itemRouter);

export default router;
