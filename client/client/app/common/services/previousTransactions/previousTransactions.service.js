class previousTransactionsService {
    constructor(AppConstants, $http, $q) {
        "ngInject";
        this._AppConstants = AppConstants;
        this._$http = $http;
        this._$q = $q;
    }
    transactionFrom(userId) {
        let deferred = this._$q.defer();
        this._$http({
            url: this._AppConstants.api + this._AppConstants.transactions + 'findBy/' + userId,
            method: 'GET'
        }).then(
            (res) => {
                // console.log(res)
                return deferred.resolve(res);
            },
            (err) => deferred.reject(err)
        );
        return deferred.promise;
    }
}

export default previousTransactionsService;
