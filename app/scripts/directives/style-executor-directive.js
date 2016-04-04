'use strict';

angular.module('emailBuilderApp')
    .directive('styleExecutorDirective', function () {
        var linker = function ($scope, element) {
            var currentElement = null;

            var buildStyleObject = function(event) {
                currentElement = $(this);

                var currentStyle = currentElement[0].attributes[0].value;
                var styles = currentStyle.split(';');
                var styleObject = getStyleJSONObject(styles);
                $scope.styleObject = styleObject;
            };

            var getStyleJSONObject = function (styles) {
                var i = styles.length;
                var result = {};
                var style, k, v;

                while (i--) {
                    style = styles[i].split(':');
                    if (style.length != 2) {
                        continue;
                    }
                    k = style[0].trim();
                    v = style[1].trim();
                    if (k.length > 0 && v.length > 0) {
                        result[k] = v;
                    }
                }
                return result;
            };

            $scope.$on('renderFinished', function(ngRepeatFinishedEvent) {
                var modules = element.find('#module');
                currentElement = modules;
                console.log('ngRepeatFinished modules' + modules.length);
                for (var i = 0; i < modules.length; i++) {
                    var children = modules[i].children;
                    console.log('children' + children.length);
                    for (var j = 0; j < children.length; j++) {
                        children[j].onclick = buildStyleObject;
                    }
                }
            });

            $scope.$watchCollection('styleObject', function (newValue) {
                if (currentElement !== null) {
                    if (currentElement.isArray) {
                        for (var i = 0; i < currentElement.length; i++) {
                            currentElement[i].css(newValue);
                        }
                    } else {
                        currentElement.css(newValue);
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