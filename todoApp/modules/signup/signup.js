/**
 * Created by MinhTu on 11/3/2016.
 */
angular.module('todoApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('signup', {
                url: '/signup',
                templateUrl: 'modules/signup/signup.html',
                controller: 'signupCtrl'
            })


    });
