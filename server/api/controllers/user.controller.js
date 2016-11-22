import User from '../models/user.model';
import responseHandler from './../helpers/responseHandler';
import * as _ from 'lodash';

/**
 * Load user and append to req.
 */
function load(req, res, next, id) {
    User.get(id)
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
 * Get user with email address
 * @returns {User}
 */
function findByEmail(req, res, next, email) {
    User.validateEmail(email)
        .then((user) => res.json(user))
        .catch((e) => next(e));
}

/**
 * Create new user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
function create(req, res, next) {
    const user = new User(req.body);

    user.save()
        .then((savedUser) => res.json(savedUser))
        .catch((e) => next(e));
}

/**
 * Update existing user
 * @property {string} req.body. - The username of user.
 * @property {string} req.body.mobileNumber - The mobileNumber of user.
 * @returns {User}
 */
function update(req, res, next) {
    const user = req.user;
    _.map(req.body, (value, key) => {
        user[key] = value;
    });
    user.save()
        .then((savedUser) => res.json(savedUser))
        .catch((e) => next(e));
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
    const { limit = 250, skip = 0 } = req.query;
    User.list({ limit, skip })
        .then((users) => res.json(users))
        .catch((e) => next(e));
}

/**
 * Delete user.
 * @returns {User}
 */
function remove(req, res, next) {
    const user = req.user;
    user.remove()
        .then((deletedUser) => res.json(deletedUser))
        .catch((e) => next(e));
}

export default { load, get, create, update, list, remove, findByEmail };
