class getDummyDataService {
    constructor() {
        this.currencyMapping = [
            { currency: 'AUD', code: 'A&#x24;' },
            { currency: 'CAD', code: 'C&#x24;' },
            { currency: 'EUR', code: '&#x80;' },
            { currency: 'HKD', code: 'HK&#x24;' },
            { currency: 'JYP', code: '&#xa5;' },
            { currency: 'USD', code: '&#x24;' }
        ];

        this.paymentTypes = [
            "I'm sending money to family or friends",
            "I'm paying for goods service"
        ];

    }
    currency() {
        return this.currencyMapping;
    };

    paymentTypes() {
        return this.paymentTypes;
    };
}

export default getDummyDataService;
