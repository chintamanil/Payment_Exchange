import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import transactionCtrl from '../controllers/transaction.controller';

const router = express.Router();

router.route('/')
    /** GET /api/transactions - Get list of transactions */
    .get(transactionCtrl.listAll)

/** POST /api/transactions - Create new transaction */
.post(validate(paramValidation.createTransaction), transactionCtrl.create);

router.route('/:transactionId')
    /** GET /api/transactions/:userId - Get transaction */
    .get(transactionCtrl.get);


/** PUT /api/transactions/:userId - Update transaction */ // DONT NEED PUT
//.put(validate(paramValidation.updateTransaction), transactionCtrl.update)

/** DELETE /api/transactions/:userId - Delete transaction */ // DONT NEED PUT
// .delete(transactionCtrl.remove);

/** POST /api/users/findBy/:userEmail - Create new user */
router.route('/findBy/:userId')
    .get(transactionCtrl.get);

/** Load transaction when API with userId route parameter is hit */
router.param('userId', transactionCtrl.listAllForUser);

/** Load transaction when API with transactionId route parameter is hit */
router.param('transactionId', transactionCtrl.load);

export default router;
