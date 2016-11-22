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

describe('## Transaction APIs', () => {
    let user1 = {
        'address': '76 Ton Street, Axis, Utah, 6063',
        'phone': ' (818) 168-2928',
        'username': 'test1.user1@paypal.com',
        'createdAt': 'Sunday, June 1, 2015 5:18 PM',
        'company': 'IBM',
        'lastName': 'John1',
        'firstName': 'Doe1',
        'userType': 0
    };

    describe('# POST /api/users', () => {
        it('should create a new user', (done) => {
            request(app)
                .post('/api/users')
                .send(user1)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.username).to.equal(user1.username);
                    expect(res.body.phone).to.equal(user1.phone);
                    user1 = res.body;
                    done();
                })
                .catch(done);
        });
    });

    let user2 = {
        'address': '76 Ton Street, Axis, Utah, 6063',
        'phone': ' (818) 168-2928',
        'username': 'test2.user2@paypal.com',
        'createdAt': 'Sunday, June 1, 2015 5:18 PM',
        'company': 'IBM',
        'lastName': 'John1',
        'firstName': 'Doe1',
        'userType': 0
    };

    describe('# POST /api/users', () => {
        it('should create a new user', (done) => {
            request(app)
                .post('/api/users')
                .send(user2)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.username).to.equal(user2.username);
                    expect(res.body.phone).to.equal(user2.phone);
                    user2 = res.body;
                    done();
                })
                .catch(done);
        });
    });

    let item = {
        'itemDescription': 'Hello, ! You  11 unread messages.',
        'createdAt': 'Wednesday, May 14, 2016 10:00 PM',
        'itemName': 'Item:Test Transaction',
        'defaultCost': 30
    };
    let items = [];
    describe('# POST /api/items', () => {
        it('should create a new item', (done) => {
            request(app)
                .post('/api/items')
                .send(item)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.itemName).to.equal(item.itemName);
                    expect(res.body.itemDescription).to.equal(item.itemDescription);
                    item = res.body;
                    items.push(item._id)
                    done();
                })
                .catch(done);
        });
    });

    let transaction = {
        'details': '5829791a6c6c7676e.5829791a84fe82c09b886f82@undefined.me',
        'paymentType': 1,
        'items': items,
        'currency': 'USD',
        'amount': 410,
        'toUserId': user1._id,
        'fromUserId': user2._id,
        'createdAt': 'Wednesday, September 13, 2014 4:22 AM'
    };

    describe('# POST /api/transactions', () => {
        it('should create a new item', (done) => {
            request(app)
                .post('/api/transactions')
                .send(transaction)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.itemName).to.equal(transaction.itemName);
                    expect(res.body.itemDescription).to.equal(transaction.itemDescription);
                    transaction = res.body;
                    done();
                })
                .catch(done);
        });
    });

    describe('# GET /api/transactions/:transactionId', () => {
        it('should get all transaction for given transactionId', (done) => {
            request(app)
                .get(`/api/transactions/${transaction._id}`)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.items.length).to.equal(1);
                    expect(res.body.items[0]['itemDescription']).to.equal('Hello, ! You  11 unread messages.');
                    done();
                })
                .catch(done);
        });
    });

    describe('# GET /api/transactions', () => {
        it('should get all transaction', (done) => {
            request(app)
                .get(`/api/transactions`)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body).to.be.an('array');
                    done();
                })
                .catch(done);
        });
    });

    describe('# GET /api/transactions/findBy:userId', () => {
        it('should get transaction for :userId', (done) => {
            request(app)
                .get(`/api/transactions/findBy/${user1._id}`)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.itemName).to.equal(transaction.itemName);
                    expect(res.body.itemDescription).to.equal(transaction.itemDescription);
                    // expect(dummyItems['details']).to.equal('5829791a6c6c7676e.5829791a84fe82c09b886f82@undefined.me');
                    // expect(res.body.items[0]['itemDescription']).to.equal('Hello, ! You  11 unread messages.');
                    done();
                })
                .catch(done);
        });
    });

    describe('# GET /api/transactions/:itemId', () => {
        it('should report error with message - Not found, when user does not exists', (done) => {
            request(app)
                .get('/api/transactions/56c787ccc67fc16ccc1a5e92')
                .expect(httpStatus.NOT_FOUND)
                .then((res) => {
                    expect(res.body.message).to.equal('Not Found');
                    done();
                })
                .catch(done);
        });
    });

    describe('# PUT /api/transactions/:transactionId', () => {
        it('should update user details', (done) => {
            transaction.itemName = 'Item:Test2 Item2';
            request(app)
                .put(`/api/transactions/${transaction._id}`)
                .send(transaction)
                .expect(httpStatus.NOT_FOUND)
                .then((res) => {
                    expect(res.body.message).to.equal('Not Found');
                    done();
                })
                .catch(done);
        });
    });

    describe('# DELETE /api/transactions/', () => {
        it('should delete user', (done) => {
            request(app)
                .delete(`/api/transactions/${transaction._id}`)
                .expect(httpStatus.NOT_FOUND)
                .then((res) => {
                    expect(res.body.message).to.equal('Not Found');
                    done();
                })
                .catch(done);
        });
    });
});
