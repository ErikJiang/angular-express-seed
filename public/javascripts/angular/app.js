'use strict';

var app = angular.module('seedApp', [
    'ngRoute',
    'seedControllers'
]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/panelFunc',
            controller: 'panelCtrl'
        }).
        when('/test', {
            templateUrl: 'partials/testFunc',
            controller: 'testCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    $locationProvider.html5Mode(true);
}]);