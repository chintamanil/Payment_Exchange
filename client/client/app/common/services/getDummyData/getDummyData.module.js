import angular from 'angular';
import getDummyDataService from './getDummyData.service';

let getDummyDataModule = angular.module('getDummyDataModule', [])

.service('getDummyDataService', getDummyDataService)

.name;

export default getDummyDataModule;
