import mongoose from 'mongoose';
import responseHandler from './../helpers/responseHandler';

const userNameRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneReges = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
    __v: {
        type: Number,
        select: false
    },
    username: {
        type: String,
        required: true,
        unique: true,
        match: [userNameRegex, 'The value of path {PATH} ({VALUE}) is not a valid email address.'] //TODO Figure our right regex
    },
    phone: {
        type: String,
        required: true
            // match: [phoneReges, 'The value of path {PATH} ({VALUE}) is not a valid number.']
    },
    password: {
        type: String,
        required: false,
        match: [/^[A-Z0-9a-z._]{3,}$/, 'The value of path {PATH} ({VALUE}) is not a valid  password.']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    firstName: {
        type: String,
        required: false,
        trim: true,
        match: [/^[a-zA-Z0-9]{1,}$/, 'The value of path {PATH} ({VALUE}) is not a valid first Name.'] // Added 0-9 for testing
    },
    lastName: {
        type: String,
        required: false,
        trim: true,
        match: [/^[a-zA-Z0-9]{1,}$/, 'The value of path {PATH} ({VALUE}) is not a valid last Name.'] // Added 0-9 for testing
    },
    userType: {
        type: Number,
        default: 0 // 0 : Person 1: Business
    },
    address: {
        type: String,
        required: false
    },
    company: {
        type: String,
        required: false
    }
});

/**
 * Methods
 */
UserSchema.method({});

/**
 * Statics
 */
UserSchema.statics = {
    /**
     * Get user
     * @param {ObjectId} id - The objectId of user.
     * @returns {Promise<User, APIError>}
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
     * Get user
     * @param {ObjectId} username - The username/email of user.
     * @returns {Promise<User, APIError>}
     * @api private
     */
    validateEmail(username) {
        return this.find({ username: username })
            .select('firstName lastName company') //
            .exec()
            .then((user) => {
                return responseHandler(user);
            });
    },
    /**
     * List users in descending order of 'createdAt' timestamp.
     * @param {number} skip - Number of users to be skipped.
     * @param {number} limit - Limit number of users to be returned.
     * @returns {Promise<User[]>}
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
 * @typedef User
 */
export default mongoose.model('User', UserSchema);
