import Item from '../models/item.model';
import * as _ from 'lodash';

/**
 * Load Item and append to req.
 */
function load(req, res, next, id) {
    Item.get(id)
        .then((item) => {
            req.item = item;
            return next();
        })
        .catch((e) => next(e));
}

/**
 * Get item
 * @returns {Item}
 */
function get(req, res) {
    return res.json(req.item);
}

/**
 * Create new Item
 * @property {string} req.body. - The Item Object.
 * @returns {Item}
 */
function create(req, res, next) {
    const item = new Item(req.body);
    item.save()
        .then(savedItem => res.json(savedItem))
        .catch((e) => next(e));
}

/**
 * Update existing Item
 * @property {string} req.body - The Item Object.
 * @returns {Item}
 */
function update(req, res, next) {
    let item = req.item;
    _.map(req.body, (value, key) => {
            item[key] = value;
    });

    item.save()
        .then((savedItem) => res.json(savedItem))
        .catch((e) => next(e));
}

/**
 * Get Item list.
 * @property {number} req.query.skip - Number of items to be skipped.
 * @property {number} req.query.limit - Limit number of items to be returned.
 * @returns {Item[]}
 */
function list(req, res, next) {
    const { limit = 250, skip = 0 } = req.query;
    Item.list({ limit, skip })
        .then((items) => res.json(items))
        .catch((e) => next(e));
}

/**
 * Delete Item.
 * @returns {Item}
 */
function remove(req, res, next) {
    const item = req.item;
    item.remove()
        .then((deletedItem) => res.json(deletedItem))
        .catch((e) => next(e));
}

export default { load, get, create, update, list, remove };
