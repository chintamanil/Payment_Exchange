import mongoose from 'mongoose';
import responseHandler from './../helpers/responseHandler';

const Schema = mongoose.Schema;
/**
 * Tranaction Schema
 */
const TransactionSchema = new mongoose.Schema({
    __v: {
        type: Number,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    fromUserId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, // TODO Check from & to are not the same
    toUserId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    amount: {
        type: String, // TODO Change to Number (need ot update Ctrl)
        required: true
    },
    currency: {
        type: String, // TODO Change to Number (need ot update Ctrl)
        required: true
    },
    items: [
        { type: Schema.Types.ObjectId, ref: 'Item' }
    ],
    paymentType: {
        type: Number,
        default: 0
    },
    details: {
        type: String,
        required: false,
        trim: true
    }
});

/**
 * Methods
 */
TransactionSchema.method({});

/**
 * Statics
 */
TransactionSchema.statics = {
    /**
     * Get transaction
     * @param {ObjectId} id - The objectId of transaction.
     * @returns {Promise<Transaction, APIError>}
     * @api private
     */
    get(id) {
        return this.findById(id)
            .populate([{
                path: 'toUserId',
                select: 'firstName lastName username -_id'
            }, {
                path: 'items',
                select: '-_id itemName itemDescription'
            }])
            .select('-_id -createdAt -currency -amount -paymentType')
            .exec()
            .then((user) => {
                return responseHandler(user);
            });
    },


    /**
     * List trasactionsn in descending order of 'createdAt' timestamp from uerrId.
     * @param {number} skip - Number of users to be skipped.
     * @param {number} limit - Limit number of users to be returned.
     * @param {string} userId - Id of User
     * @returns {Promise<Transaction[]>}
     * @api private
     */
    listForUser({ skip = 0, limit = 250, userId } = {}) {
        return this.find({ fromUserId: userId })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate({
                path: 'toUserId',
                select: 'firstName lastName'
            })
            .select('-fromUserId -items -paymentType') //TODO Find better way to remove __v
            .exec();
    },

    /**
     * List trasactionsn in descending order of 'createdAt' timestamp.
     * @param {number} skip - Number of users to be skipped.
     * @param {number} limit - Limit number of users to be returned.
     * @returns {Promise<Transaction[]>}
     * @api private
     */
    listAll({ skip = 0, limit = 250 } = {}) {
        return this.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .populate('toUserId fromUserId items')
            .exec();
    }
};

/**
 * @typedef Transaction
 */
export default mongoose.model('Transaction', TransactionSchema);
