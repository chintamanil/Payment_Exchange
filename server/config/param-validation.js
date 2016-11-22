import Joi from 'joi';

export default {
    // POST /api/users
    createUser: {
        body: {
            username: Joi.string().required(),
            phone: Joi.string().required()
        }
    },

    // UPDATE /api/users/:userId
    updateUser: {
        body: {
            username: Joi.string().required(),
            phone: Joi.string().required()
        },
        params: {
            userId: Joi.string().hex().required()
        }
    },

    createTransaction: {
        body: {}
    },

    updateTransaction: {
        body: {},
        params: {
            userId: Joi.string().hex().required()
        }
    },

    createItem: {
        body: {}
    },

    updateItem: {
        body: {},
        params: {
            itemId: Joi.string().hex().required()
        }
    },

    // POST /api/auth/login
    login: {
        body: {
            username: Joi.string().required(),
            password: Joi.string().required()
        }
    }
};
