/**
 * Created by MinhTu on 11/3/2016.
 */
angular.module('todoApp')
    .directive('checkPassword', [function () {
        return {
            restrict: 'A',
            // scope:true,
            require: 'ngModel',
            link: function(scope, element, attr, ctrl) {

                // please note you can name your function & argument anything you like

                function customValidator(ngModelValue) {
                    if (/[0-9]/.test(ngModelValue)) {
                        ctrl.$setValidity('hasNumber', true);
                    } else {
                        ctrl.$setValidity('hasNumber', false);
                    }
                    if (/[A-Z]/.test(ngModelValue)) {
                        ctrl.$setValidity('uppercaseValidator', true);
                    } else {
                        ctrl.$setValidity('uppercaseValidator', false);
                    }
                    console.log(ngModelValue);
                    return ngModelValue;
                }

                ctrl.$parsers.push(customValidator);

            }

        };
}]);