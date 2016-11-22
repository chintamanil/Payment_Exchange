import * as _ from 'lodash';

let UserFactory = function(getDummyDataService, validateEmailService) {
    'ngInject';
    this.user = {
        signedUser: {},
        toUser: {},
        currency: { code: '', currency: 'USD' } // Default
    };

    let setDefaults = () => {
        if (!this.user._id) {
            // To set the signedI In user
            validateEmailService.validate('terry.drake@comfirm.info')
                .then(
                    (res) => {
                        if (res.data.length > 0) {
                            this.user.signedUser = res.data[0];
                            return true;
                        }
                        return undefined;
                    },
                    (err) => {
                        return err
                    }
                );
            this.currencyMapping = getDummyDataService.currency();
            this.selectedCurrency = this.user.currency.currency;
            const index = _.findIndex(this.currencyMapping, { currency: this.selectedCurrency });
            this.user.currency = this.currencyMapping[index];
        }
    }

    let getSignedUser = () => {
        return this.user.signedUser;
    };

    let setSignedUser = (user) => {
        this.user.signedUser = user;
        return true;
    };

    let getToUser = () => {
        return this.user.toUser;
    };

    let setToUser = (user) => {
        this.user.toUser = user;
        return true
    };

    let getUserCurrency = () => {
        return this.user.currency;
    };
    let setUserCurrency = (currency) => {
        this.user.currency = currency;
        return true
    };

    return { getSignedUser, setSignedUser, getToUser, setToUser, getUserCurrency, setUserCurrency, setDefaults };
};

export default UserFactory;
