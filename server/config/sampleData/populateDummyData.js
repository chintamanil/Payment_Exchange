import sampleUsers from './users';
import sampleItems from './items';
import sampleTransactions from './transactions';
import * as _ from 'lodash';
import mongoose from 'mongoose';
import responseHandler from './../../api/helpers/responseHandler';
Promise = require('bluebird');
mongoose.Promise = Promise;

let findRandomInArray = (arry) => {
    const randomNum = Math.floor(Math.random() * arry.length - 1) + 0;
    return arry[randomNum];
}

let generateItems = (itemsArray) => {
    const randomNum1 = Math.floor(Math.random() * itemsArray.length - 1 - 3) + 0;
    const randomNum2 = Math.floor(Math.random() * 3) + 0;
    return itemsArray.slice(randomNum1, randomNum1 + randomNum2);
}

let populateDummyData = () => {
    let users = [];
    let items = [];
    let User = mongoose.model('User');
    let Transaction = mongoose.model('Transaction');
    let Item = mongoose.model('Item');

    User.remove({}, () => {});
    Transaction.remove({}, () => {});
    Item.remove({}, () => {});

    _.forEach(sampleUsers, (user) => {
        const createdUser = new User(user);
        // createdUser.markModified('name');
        createdUser.save();
        users.push(createdUser._id);
    });

    console.log(users[0], 'userid-0');
    console.log(users[1], 'userid-1');

    _.forEach(sampleItems, (item) => {
        const createdItem = new Item(item);
        createdItem.save();
        items.push(createdItem._id);
    });

    _.forEach(sampleTransactions, (transaction) => {
        const createdTransaction = new Transaction({
            fromUserId: users[Math.floor(Math.random() * 2) + 0],
            toUserId: findRandomInArray(users),
            amount: transaction.amount,
            currency: transaction.currency,
            items: generateItems(items)
        });
        createdTransaction.save();
    });

};
export default populateDummyData;
