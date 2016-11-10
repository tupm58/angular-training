/**
 * Created by MinhTu on 11/3/2016.
 */
angular.module('todoApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'modules/login/login.html',
                controller: 'loginCtrl'
            })


    });
