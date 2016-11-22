class HomeController {
    constructor(UserFactory) {
        'ngInject';
        UserFactory.setDefaults();
    }
}

export default HomeController;
