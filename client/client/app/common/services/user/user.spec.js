(function(expect, describe, it, window, angular, ngDescribe) {
    'use strict';
    /*global ngDescribe:false */
    /*global it:false */
    /*global expect:false */
    /*global spyOn:false */

    ngDescribe({
        name: 'userFactoryModule Test ',
        only: false,
        modules: ['userModule', 'getDummyDataModule', 'validateUserModule', 'app.constants'],
        inject: ['UserFactory', 'getDummyDataService', 'validateEmailService', '$http', '$q'],
        verbose: true,
        http: {
            get: {
                '/my/url': 42, // status 200, data 42
                'http://localhost:4040/api/users/findBy/terry.drake@comfirm.info': [200, 'foo'] // status 201, data "foo"
            }
        },
        tests(deps) {
            it('userFactory default currency code', function(done) {
                deps.UserFactory.setDefaults();
                let user = deps.UserFactory.getSignedUser();
                console.log(user);
                expect(user.firstName).to.equal('terry')
                done();
                deps.http.flush();
            });
            it('userFactory default currency code', function(done) {
                let currency = deps.UserFactory.getUserCurrency().currency;
                expect(currency).to.equal('USD');
                done();
            });
        }

    });





})(chai.expect, describe, it, this, angular, ngDescribe);
