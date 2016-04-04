'use strict';

angular.module('emailBuilderApp')
    .directive('styleEditorDirective', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                styleObject: '='
            },
            templateUrl: '/views/style-editor-tpl.html'
        };
    });