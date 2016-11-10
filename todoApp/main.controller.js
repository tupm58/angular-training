/**
 * Created by MinhTu on 11/3/2016.
 */
angular.module('todoApp')
    .controller('mainCtrl', function ($scope,$state,$rootScope,$location) {
        // $rootScope.loggedIn = false;
        if (localStorage['User-login']){
            console.log("main");
            $rootScope.loggedIn = true;
            $location.path('/todo');
        }else {
            console.log('nooo');
            $state.go('login');//????
            $location.path('/login');
        }
        $scope.logOut = function(){
            localStorage.clear();
            $state.go('login');
            $rootScope.loggedIn = false;

        }
    });