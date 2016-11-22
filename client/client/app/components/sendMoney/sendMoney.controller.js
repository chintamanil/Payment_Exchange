import * as _ from 'lodash';

class SendMoneyController {
    constructor($timeout, validateEmailService, getDummyDataService, UserFactory) {
        'ngInject';
        UserFactory.setDefaults();
        const defaultCurrency = UserFactory.getUserCurrency();
        this.formObj = {};
        this.selectedIndex = 0;
        this.showSpinner = false;
        this.formSubmitted = false;

        this.currencyMapping = getDummyDataService.currency();
        this.selectedCurrency = defaultCurrency.code;
        const index = _.findIndex(this.currencyMapping, { currency: defaultCurrency.currency });
        this.selectedCurrency = this.currencyMapping[index];

        this.paymentTypes = [
            "I'm sending money to family or friends",
            "I'm paying for goods service"
        ];

        this.toggleSelect = (index) => {
            this.selectedIndex = index;
            this.formObj.paymentType = index;
        };

        let countUp = () => {
            this.showSpinner = false
            this.formSubmitted = true;
        };

        this.submitForm = () => {
            // console.log(this.formObj);
            this.showSpinner = true;
            $timeout(countUp, 500);
            this.toUser = UserFactory.getToUser();
        };

        this.clearForm = (form) => {
            this.toUser = UserFactory.setToUser({});
            this.selectedIndex = 0;
            this.formSubmitted = false;
            form.$setPristine();
            this.formObj = {
                amount: '',
                to: '',
                message: ''
            };
        };
    }
}

export default SendMoneyController;
