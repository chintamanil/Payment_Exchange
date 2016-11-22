import angular from 'angular';
import Home from './home/home';
import sendMoneyModule from './sendMoney/sendMoney.module';
import transactionHistoryModule from './transactionHistory/transactionHistory.module';

const componentModule = angular.module('app.components', [
    Home,
    sendMoneyModule,
    transactionHistoryModule
])

.name;

export default componentModule;
