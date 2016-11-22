class validateEmailService {
    constructor(AppConstants, $http, $q) {
        "ngInject";
        this._AppConstants = AppConstants;
        this._$http = $http;
        this._$q = $q;
    }
    validate(email) {
        let deferred = this._$q.defer();
        this._$http({
            url: this._AppConstants.api + this._AppConstants.users + 'findBy/' + email,
            method: 'GET'
        }).then(
            (res) => {
                return deferred.resolve(res);
            },
            (err) => deferred.reject(err)
        );
        return deferred.promise;
    }
}

export default validateEmailService;
