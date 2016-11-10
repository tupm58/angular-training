/**
 * Created by MinhTu on 11/3/2016.
 */
angular.module('todoApp')
    .controller('signupCtrl', function ($scope, $state, $rootScope) {
        $scope.users = [];
        if (localStorage['User-data']) {
            $scope.users = JSON.parse(localStorage['User-data']);
        }
        $scope.signup = function () {
            // console.log($scope.email);
            // console.log($scope.password);
            var request = {
                email: $scope.email,
                password: $scope.password
            };
            $scope.users.push(request);
            localStorage['User-data'] = JSON.stringify($scope.users);
            // console.log("success");
            $state.go('login');
        }
    });