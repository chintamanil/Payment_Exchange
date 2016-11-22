import angular from 'angular';
import UserFactory from './user.factory';

let userModule = angular.module('userModule', [])

.factory('UserFactory', UserFactory)

.name;

export default userModule;
