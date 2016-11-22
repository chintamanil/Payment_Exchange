import mongoose from 'mongoose';
import responseHandler from './../helpers/responseHandler';

/**
 * Item Schema
 */
const ItemSchema = new mongoose.Schema({
    __v: {
        type: Number,
        select: false
    },
    itemName: {
        type: String,
        required: true,
        trim: true //,
            // match: [/^[a-zA-Z0-9]{3,}$/, 'The value of path {PATH} ({VALUE}) is not a valid last Name.']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    itemDescription: {
        type: String,
        required: false,
        trim: true
    },
    defaultCost: {
        type: Number,
        required: false
    }
});

/**
 * Methods
 */
ItemSchema.method({});

/**
 * Statics
 */
ItemSchema.statics = {
    /**
     * Get item
     * @param {ObjectId} id - The objectId of item.
     * @returns {Promise<Item, APIError>}
     * @api private
     */
    get(id) {
        return this.findById(id)
            .exec()
            .then((user) => {
                return responseHandler(user);
            });
    },

    /**
     * Get item from item name
     * @param {ObjectId} iname- The name of item.
     * @returns {Promise<Item, APIError>}
     * @api private
     */
    // findByName(name) {
    //     return this.find({ itemName: name })
    //         .exec()
    //         .then((user) => {
    //             return responseHandler(user);
    //         });
    // },


    /**
     * List Items in descending order of 'createdAt' timestamp.
     * @param {number} skip - Number of users to be skipped.
     * @param {number} limit - Limit number of users to be returned.
     * @returns {Promise<Item[]>}
     * @api private
     */
    list({ skip = 0, limit = 250 } = {}) {
        return this.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .exec();
    }
};

/**
 * @typedef Item
 */
export default mongoose.model('Item', ItemSchema);
