function formEmailValidateDirective(validateEmailService, UserFactory) {
    'ngInject';
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, elm, attrs, ctrl) {
          // TODO use Debounce from lodash over here
            elm.on('keyup', function() {
                scope.$apply(function() {
                    const email  = elm.val();
                    const validateEmailPromise = validateEmailService.validate(email);
                    validateEmailPromise
                        .then(
                            (res) => {
                                if (res.data.length > 0) {
                                    ctrl.$setValidity('validEmail', true);
                                    UserFactory.setToUser(res.data[0]);
                                    return true;
                                } else {
                                    ctrl.$setValidity('validEmail', false);
                                    return undefined
                                }
                            },
                            (err) => {
                                return err
                            }
                        );
                });
            });
        }
    }
}
export default formEmailValidateDirective;

// TODO Use this
// $scope.$watch("id", _.debounce(function (id) {
//     // Code that does something based on $scope.id
//     // This code will be invoked after 1 second from the last time 'id' has changed.
// }, 1000));
