import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import userCtrl from '../controllers/user.controller';

const router = express.Router();

router.route('/')
    /** GET /api/users - Get list of users */
    .get(userCtrl.list)

/** POST /api/users - Create new user */
.post(validate(paramValidation.createUser), userCtrl.create);

router.route('/:userId')
    /** GET /api/users/:userId - Get user */
    .get(userCtrl.get)

/** PUT /api/users/:userId - Update user */
.put(validate(paramValidation.updateUser), userCtrl.update)

/** DELETE /api/users/:userId - Delete user */
.delete(userCtrl.remove);

/** POST /api/users/findBy/:userEmail - Create new user */
router.route('/findBy/:username')
    .get(userCtrl.get);

/** Load user when API with username route parameter is hit */
router.param('username', userCtrl.findByEmail);

/** Load user when API with userId route parameter is hit */
router.param('userId', userCtrl.load);
export default router;
