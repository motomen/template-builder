'use strict';

var __indexOf = [].indexOf || function (item) {
        for (var i = 0, l = this.length; i < l; i++) {
            if (i in this && this[i] === item) {
                return i;
            }
        }
        return -1;
    };

angular.module('emailBuilderApp')
    .directive('elementDirective', function ($http, $compile) {
        var getTemplateUrl = function (element) {
            var type = element.type;
            var templateUrl = 'views/tags/';
            var supportedElements = [
                'table',
                'td',
                'tr'
            ];

            if (__indexOf.call(supportedElements, type) >= 0) {
                return templateUrl += type + '.html';
            }
        };

        var linker = function ($scope, element) {
            // Get template content from path
            var templateUrl = getTemplateUrl($scope.element);
            $http.get(templateUrl).then(function (response) {
                element.html(response.data);
                $compile(element.contents())($scope);
            });
        };

        return {
            controller: 'ElementCtrl',
            restrict: 'EA',
            replace: true,
            scope: {
                element: '='
            },
            link: linker
        };
    });