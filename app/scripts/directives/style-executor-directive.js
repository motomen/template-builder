'use strict';

angular.module('emailBuilderApp')
    .directive('styleExecutorDirective', function () {
        var linker = function ($scope, element) {
            var buildStyleObject = function(elem) {
                console.log('click' + elem);
            };

            $scope.$on('renderFinished', function(ngRepeatFinishedEvent) {
                var modules = element.find('#module');
                console.log('ngRepeatFinished modules' + modules.length);
                for (var i = 0; i < modules.length; i++) {
                    var children = modules[i].children;
                    console.log('children' + children.length);
                    for (var j = 0; j < children.length; j++) {
                        children[j].onclick = buildStyleObject;
                    }
                }
            });

            $scope.$watch('styleObject.div_module_style.value', function (newValue) {
                var elements = element.find('#module');
                for (var i = 0; i < elements.length; i++) {
                    var myEl = angular.element(elements[i]);
                    if (myEl) {
                        myEl.css('color', newValue);
                    }
                }
            });
        };

        return {
            restrict: 'E',
            replace: true,
            scope: {
                styleObject: '=',
                template: '='
            },
            link: linker
        };
    });