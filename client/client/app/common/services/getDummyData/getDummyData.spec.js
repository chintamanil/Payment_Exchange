(function(expect, describe, it, window, angular, ngDescribe) {
    'use strict';
    /*global ngDescribe:false */
    /*global it:false */
    /*global expect:false */
    /*global spyOn:false */

    angular.module('A', []).value('foo', 42);
    ngDescribe({
        modules: 'A',
        tests: function(foo) {
            it('finally a test', function() {
                expect(foo).to.equal(42);
            });
        }
    });

    ngDescribe({
        modules: 'getDummyDataModule',
        inject: ['getDummyDataService'],
        tests(deps) {
            it('should have default settings', function() {
                let currencyMapping = deps.getDummyDataService.currencyMapping;
                let paymentTypes = deps.getDummyDataService.paymentTypes;
                expect(currencyMapping[0].currency).to.equal('AUD');
                expect(paymentTypes[0]).to.equal("I'm sending money to family or friends");
            });
        }
    });

})(chai.expect, describe, it, this, angular, ngDescribe);
