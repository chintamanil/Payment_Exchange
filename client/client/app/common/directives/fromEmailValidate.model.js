import angular from 'angular';
import formEmailValidateDirective from './fromEmailValidate.directive';

let formEmailValidateModule = angular.module('formEmailValidateModule', [])

.directive('vaidateEmail', formEmailValidateDirective)

.name;

export default formEmailValidateModule;

