'use strict';

/**
 * @ngdoc overview
 * @name emailBuilderApp
 * @description
 * # emailBuilderApp
 *
 * Main module of the application.
 */
angular
    .module('emailBuilderApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ang-drag-drop'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/builder', {
                templateUrl: 'views/builder.html',
                controller: 'BuilderCtrl',
                controllerAs: 'builder'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
