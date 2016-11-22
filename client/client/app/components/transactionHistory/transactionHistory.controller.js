class TransactionHistoryController {
    constructor($rootScope, previousTransactionsService, UserFactory, validateEmailService) {
        'ngInject';

        this.goBack = $rootScope.goBack;

        UserFactory.setDefaults();
        this.previousTransactionsService = previousTransactionsService;
        this.defaultCurrency = UserFactory.getUserCurrency().code;
        let previousTransactions = (res) => {
            this.previousTransactionsService
                .transactionFrom(res._id) // 582a27c2b00bc16055cbfe55
                .then(
                    (res) => {
                        this.dataList = res.data;
                    }
                );
        }

        validateEmailService.validate('terry.drake@comfirm.info')
            .then((res) => res.data[0])
            .then((res) => {
                previousTransactions(res);
            })
    }
}

export default TransactionHistoryController;
