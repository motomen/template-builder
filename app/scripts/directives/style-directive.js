'use strict';

angular.module('emailBuilderApp')
    .directive('moduleStyleDirective', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                color: '=templateColor'
            },
            template: '<div> <strong>Set color: </strong> <input ng-model="color"> </div>'
        };
    });