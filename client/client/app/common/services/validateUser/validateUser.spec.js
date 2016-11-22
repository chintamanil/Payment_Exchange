(function(expect, describe, it, window, angular, ngDescribe) {
    'use strict';
    /*global ngDescribe:false */
    /*global it:false */
    /*global expect:false */
    /*global spyOn:false */

    ngDescribe({
        name: 'validateUserModule test ',
        only: false,
        modules: ['validateUserModule', 'app.constants'],
        inject: ['validateEmailService', 'AppConstants', '$http', '$q'],
        verbose: false,
        http: {
            get: {
                '/my/url': 42, // status 200, data 42
                'http://localhost:4040/api/users/findBy/bird.gonzales@flumbo.name': [200, 'foo'] // status 201, data "foo"
            }
        },
        tests(deps) {
            it('validateEmailService ', function(done) {
                deps.validateEmailService.validate('bird.gonzales@flumbo.name').then(function(response) {
                    expect(response.data).to.equal('foo')
                    expect(response.status).to.equal(200)
                    done();
                });
                deps.http.flush();
            });
        }
    });

})(chai.expect, describe, it, this, angular, ngDescribe);
