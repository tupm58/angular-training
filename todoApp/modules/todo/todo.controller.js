angular.module('todoApp')
    .controller('todoCtrl', function ($scope,$state,$location,$rootScope) {
        if (localStorage['User-login']){
            console.log("main");
            $rootScope.loggedIn = true;
            $state.go('todo');//??????
        }else {
            console.log('nooo');
            $state.go('login');//??????
            $location.path('/login');
        }
        $scope.todoItems = [];
        if (localStorage['todo-data']){
            $scope.todoItems = JSON.parse(localStorage['todo-data']);

        }
        $scope.item = {};

        $scope.filterStatus = 'ALL';

        $scope.myFilter = function (item) {
            switch ($scope.filterStatus) {
                case 'ALL':
                    return item;
                case 'ACTIVE':
                    return !item.selected;
                case 'COMPLETED':
                    return item.selected;
            }
        }
        $scope.add = function () {
            $scope.todoItems.push({title: $scope.item.title, selected: false});
            $scope.item.title = '';
            localStorage['todo-data'] = JSON.stringify($scope.todoItems);
        }

        $scope.delete = function (idx) {
            $scope.todoItems.splice(idx, 1);
            localStorage['todo-data'] = JSON.stringify($scope.todoItems);
        }
        
        $scope.checkAll = function () {
            if ($scope.selectedAll) {
                $scope.selectedAll = true;
            } else {
                $scope.selectedAll = false;
            }

            angular.forEach($scope.todoItems, function (item) {
                item.selected = $scope.selectedAll;
            });
        }
        $scope.clearFinish = function () {
            for (var i = $scope.todoItems.length - 1; i >= 0; i--) {
                if ($scope.todoItems[i].selected == true) {
                    $scope.todoItems.splice(i, 1);
                }
            }
            localStorage['todo-data'] = JSON.stringify($scope.todoItems);
        }

    });