import angular from 'angular';
import validateEmailService from './validateUser.service';

let validateUserModule = angular.module('validateUserModule', [])

.service('validateEmailService', validateEmailService)

.name;

export default validateUserModule;
