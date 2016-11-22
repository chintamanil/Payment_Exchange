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

describe('## Item APIs', () => {
    let item = {
        'itemDescription': 'Hello, ! You have 1 unread messages.',
        'createdAt': 'Wednesday, May 12, 2016 10:00 PM',
        'itemName': 'Item:Test Item',
        'defaultCost': 36
    };

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
                    done();
                })
                .catch(done);
        });
    });

    describe('# GET /api/items/:itemId', () => {
        it('should get user details', (done) => {
            request(app)
                .get(`/api/items/${item._id}`)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.itemName).to.equal(item.itemName);
                    expect(res.body.itemDescription).to.equal(item.itemDescription);
                    done();
                })
                .catch(done);
        });

        it('should report error with message - Not found, when user does not exists', (done) => {
            request(app)
                .get('/api/items/56c787ccc67fc16ccc1a5e92')
                .expect(httpStatus.NOT_FOUND)
                .then((res) => {
                    expect(res.body.message).to.equal('Not Found');
                    done();
                })
                .catch(done);
        });
    });

    describe('# PUT /api/items/:itemId', () => {
        it('should update user details', (done) => {
            item.itemName = 'Item:Test2 Item2';
            request(app)
                .put(`/api/items/${item._id}`)
                .send(item)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.itemName).to.equal('Item:Test2 Item2');
                    expect(res.body.itemDescription).to.equal(item.itemDescription);
                    done();
                })
                .catch(done);
        });
    });

    describe('# GET /api/items/', () => {
        it('should get all items', (done) => {
            request(app)
                .get('/api/items')
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body).to.be.an('array');
                    done();
                })
                .catch(done);
        });
    });

    // describe('# GET /api/items/findBy/:name', () => {
    //     it('should get items for name', (done) => {
    //         request(app)
    //             .get(`/api/items/findBy/${item.itemName}`)
    //             .expect(httpStatus.OK)
    //             .then((res) => {
    //                 console.log(res.body);
    //                 expect(res.body[0]).to.equal('array');
    //                 done();
    //             })
    //             .catch(done);
    //     });
    // });


    describe('# DELETE /api/items/', () => {
        it('should delete item', (done) => {
            request(app)
                .delete(`/api/items/${item._id}`)
                .expect(httpStatus.OK)
                .then((res) => {
                    expect(res.body.itemName).to.equal('Item:Test2 Item2');
                    expect(res.body.itemDescription).to.equal(item.itemDescription);
                    done();
                })
                .catch(done);
        });
    });
});
