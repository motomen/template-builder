'use strict';

angular.module('emailBuilderApp')
    .directive('styleExecutorDirective', function () {
        var linker = function ($scope, element) {
            $scope.$watch('backgroundColor', function (newValue) {
                var elements = element.find('#module');
                for (var i = 0; i < elements.length; i++) {
                    var myEl = angular.element(elements[i]);
                    if (myEl) {
                        myEl.css('background-color', newValue);
                    }
                }
            });
        };

        return {
            restrict: 'EA',
            replace: true,
            scope: {
                backgroundColor: '='
            },
            link: linker
        };
    });