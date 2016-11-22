import angular from 'angular';
import uiRouter from 'angular-ui-router';
import transactionHistoryComponent from './transactionHistory.component';

let transactionHistoryModule = angular.module('transactionHistoryModule', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('transactionHistory', {
      url: '/transactionHistory',
      component: 'transactionHistory'
    });
})

.component('transactionHistory', transactionHistoryComponent)

.name;

export default transactionHistoryModule;
