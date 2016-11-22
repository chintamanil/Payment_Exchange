import Transaction from '../models/transaction.model';
import redisClient from './../../config/redis';
/**
 * Load transaction and append to req.
 */
function load(req, res, next, id) {
    Transaction.get(id)
        .then((user) => {
            req.user = user;
            return next();
        })
        .catch((e) => next(e));
}

/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
    return res.json(req.user);
}

/**
 * Create new Transaction
 * @property {string} req.body. - The details of Transaction.
 * @returns {Transaction}
 */
function create(req, res, next) {
    const transaction = new Transaction({
        fromUserId: req.body.fromUserId,
        toUserId: req.body.toUserId,
        amount: req.body.amount,
        currency: req.body.currency,
        items: req.body.items
    });
    // transaction.markModified('items');
    transaction.save()
        .then((savedTransaction) => {
            res.json(savedTransaction);
        })
        .catch((e) => next(e));
}

/**
 * DONT NEED UPDATE
 * Update existing Transaction
 * @property {string} req.body - The details of Transaction.
 * @returns {Transaction}
 */
// function update(req, res, next) {
//     const transaction = req.body;
//     transaction.save()
//         .then(savedUser => res.json(savedUser))
//         .catch(e => next(e));
// }

/**
 * Get Transaction List  All for User.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {Transaction[]}
 */
function listAllForUser(req, res, next, userId) {
    const cacheKey = 'api/transactions/findBy/userId';
    redisClient.get(cacheKey, function(err, data) {
        if (err || data === null) {
            const { limit = 250, skip = 0 } = req.query;
            Transaction.listForUser({ limit, skip, userId })
                .then((transactions) => {
                    redisClient.set(cacheKey, JSON.stringify(transactions));
                    res.json(transactions);
                })
                .catch((e) => next(e));
        } else {
            res.json(JSON.parse(data));
        }
    });
}
/**
 * Get Transaction List for All.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {Transaction[]}
 */
function listAll(req, res, next) {
    const cacheKey = 'api/transactions';
    redisClient.get(cacheKey, function(err, data) {
        if (err || data === null) {
            const { limit = 250, skip = 0 } = req.query;
            Transaction.listAll({ limit, skip })
                .then((transactions) => {
                    redisClient.set(cacheKey, JSON.stringify(transactions));
                    res.json(transactions);
                })
                .catch((e) => next(e));
        } else {
            res.json(JSON.parse(data));
        }
    });

}

/**
 * DONT NEED REMOVE
 * Delete Transaction.
 * @returns {Transaction}
 */
// function remove(req, res, next) {
//     const transaction = req.transaction;
//     transaction.remove()
//         .then(deletedTransaction => res.json(deletedTransaction))
//         .catch(e => next(e));
// }

export default { load, get, create, listAll, listAllForUser };
