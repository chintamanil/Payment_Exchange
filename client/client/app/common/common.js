import angular from 'angular';
import userModule from './services/user/user.module';
import appConstants from './config/app.constants.module.js';
import previousTransactionsModule from './services/previousTransactions/previousTransactions.module';
import validateUserModule from './services/validateUser/validateUser.module';
import getDummyDataModule from './services/getDummyData/getDummyData.module';
import formEmailValidateModule from './directives/fromEmailValidate.model';

let commonModule = angular.module('app.common', [
    appConstants,
    previousTransactionsModule,
    validateUserModule,
    getDummyDataModule,
    formEmailValidateModule,
    userModule
])

.name;

export default commonModule;
