import mongoose from 'mongoose';
import request from 'supertest-as-promised';
import httpStatus from 'http-status';
import chai, { expect } from 'chai';
import app from '../../index';

chai.config.includeStack = true;

/**
 * root level hooks
 */
after((done) => {
    mongoose.models = {};
    mongoose.modelSchemas = {};
    mongoose.connection.close();
    done();
});

describe('## User APIs', () => {
    let user = {
        'address': '776 Thornton Street, Axis, Utah, 6063',
        'phone': ' (868) 468-2958',
        'username': 'test.user@paypal.com',
        'createdAt': 'Sunday, June 7, 2015 5:18 PM',
        'company': 'Idetica',
        'lastName': 'Levy',
        'firstName': 'Spencer',
        'userType': 0
    };

    describe('# POST /api/users', () => {
        it('should create a new user', (done) => {
            request(app)
                .post('/api/users')
                .send(user)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.username).to.equal(user.username);
                    expect(res.body.phone).to.equal(user.phone);
                    user = res.body;
                    done();
                })
                .catch(done);
        });
    });

    describe('# GET /api/users/:userId', () => {
        it('should get user details', (done) => {
            request(app)
                .get(`/api/users/${user._id}`)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.username).to.equal(user.username);
                    expect(res.body.phone).to.equal(user.phone);
                    done();
                })
                .catch(done);
        });

        it('should report error with message - Not found, when user does not exists', (done) => {
            request(app)
                .get('/api/users/56c787ccc67fc16ccc1a5e92')
                .expect(httpStatus.NOT_FOUND)
                .then((res) => {
                    expect(res.body.message).to.equal('Not Found');
                    done();
                })
                .catch(done);
        });
    });

    describe('# PUT /api/users/:userId', () => {
        it('should update user details', (done) => {
            user.username = 'test.user2@paypal.com';
            request(app)
                .put(`/api/users/${user._id}`)
                .send(user)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.username).to.equal('test.user2@paypal.com');
                    expect(res.body.phone).to.equal(user.phone);
                    done();
                })
                .catch(done);
        });
    });

    describe('# GET /api/users/', () => {
        it('should get all users', (done) => {
            request(app)
                .get('/api/users')
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body).to.be.an('array');
                    done();
                })
                .catch(done);
        });
    });

    describe('# GET /api/users/findBy/:email', () => {
        it('should get users for email', (done) => {
            request(app)
                .get(`/api/users/findBy/${user.username}`)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body[0].lastName).to.equal('Levy');
                    expect(res.body[0].company).to.equal('Idetica');
                    done();
                })
                .catch(done);
        });
    });


    describe('# DELETE /api/users/', () => {
        it('should delete user', (done) => {
            request(app)
                .delete(`/api/users/${user._id}`)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.username).to.equal('test.user2@paypal.com');
                    expect(res.body.phone).to.equal(user.phone);
                    done();
                })
                .catch(done);
        });
    });
});
