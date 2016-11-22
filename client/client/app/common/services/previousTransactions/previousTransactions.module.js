import angular from 'angular';
import previousTransactionsService from './previousTransactions.service';

let previousTransactionsModule = angular.module('previousTransactionsModule', [])

.service('previousTransactionsService', previousTransactionsService)

.name;

export default previousTransactionsModule;
