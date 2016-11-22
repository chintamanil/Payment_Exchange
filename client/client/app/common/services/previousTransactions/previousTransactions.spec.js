(function(expect, describe, it, window, angular, ngDescribe) {
    'use strict';
    /*global ngDescribe:false */
    /*global it:false */
    /*global expect:false */
    /*global spyOn:false */

    ngDescribe({
        name: 'previousTransactionsModule Test ',
        only: false,
        modules: ['previousTransactionsModule', 'app.constants'],
        inject: ['previousTransactionsService', 'AppConstants', '$http', '$q'],
        verbose: false,
        http: {
            get: {
                '/my/url': 42, // status 200, data 42
                'http://localhost:4040/api/transactions/findBy/582b9335646f3bf0e51095fb': [200, 'foo'] // status 201, data "foo"
            }
        },
        tests(deps) {
            it('previousTransactionsService ', function(done) {
                deps.previousTransactionsService.transactionFrom('582b9335646f3bf0e51095fb').then(function(response) {
                    expect(response.data).to.equal('foo')
                    expect(response.status).to.equal(200)
                    done();
                });
                deps.http.flush();
            });
        }
    });

})(chai.expect, describe, it, this, angular, ngDescribe);
