'use strict';

angular.module('emailBuilderApp')
    .directive('moduleDirective', function () {
        return {
            templateUrl: 'views/module.html',
            restrict: 'EA',
            scope: {
                module: '='
            }
        };
    });