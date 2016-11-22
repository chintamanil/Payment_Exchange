import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import itemCtrl from '../controllers/item.controller';

const router = express.Router();

router.route('/')
    /** GET /api/items - Get list of items */
    .get(itemCtrl.list)

/** POST /api/items - Create new transaction */
.post(validate(paramValidation.createItem), itemCtrl.create);

router.route('/:itemId')
    /** GET /api/items/:userId - Get transaction */
    .get(itemCtrl.get)

/** PUT /api/items/:userId - Update transaction */
.put(validate(paramValidation.updateItem), itemCtrl.update)

/** DELETE /api/items/:userId - Delete transaction */
.delete(itemCtrl.remove);

/** Load transaction when API with userId route parameter is hit */
router.param('itemId', itemCtrl.load);

export default router;
