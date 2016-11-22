import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sendMoneyComponent from './sendMoney.component';

let sendMoneyModule = angular.module('sendMoney', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('sendMoney', {
      url: '/sendMoney',
      component: 'sendMoney'
    });
})

.component('sendMoney', sendMoneyComponent)

.name;

export default sendMoneyModule;
