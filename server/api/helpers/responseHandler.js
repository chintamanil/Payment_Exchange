import APIError from './APIError';
import httpStatus from 'http-status';
import Promise from 'bluebird';

function responseHandler(user) {
    if (user) {
        return user;
    }
    const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
    return Promise.reject(err);

}

export default responseHandler;
