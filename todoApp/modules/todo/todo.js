//Nhớ thêm tên module vào app.js
angular.module('todoApp')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('todo', {
                url: '/todo',
                templateUrl: 'modules/todo/todo.html',
                controller: 'todoCtrl'
            })
    });
