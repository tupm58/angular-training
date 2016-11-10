angular.module('todoApp')
    .controller('loginCtrl', function ($scope,$state,$filter,$rootScope) {
        if (localStorage['User-data']){
            $scope.users = JSON.parse(localStorage['User-data']);

        }
        $scope.login = function(){
            var request = {
                email: $scope.email,
                password: $scope.password
            };
            console.log($scope.users);

            var results = $filter('filter')( $scope.users, {email: $scope.email, password: $scope.password}, true);
            console.log(results);
            if (results.length == 1 ) {
                console.log('login');
                $state.go('todo');
                localStorage['User-login'] = JSON.stringify(request);
                $rootScope.loggedIn = true;
            }else{
                console.log('ko');
            }
        }


    });