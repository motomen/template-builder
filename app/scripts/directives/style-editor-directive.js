'use strict';

angular.module('emailBuilderApp')
    .directive('styleEditorDirective', function () {
        var linker = function($scope) {
            $scope.styleObject = {
                'div_module_style': {
                    'name': 'color',
                    'value': ''
                }
            };
        };

        return {
            restrict: 'E',
            replace: true,
            scope: {
                styleObject: '='
            },
            template: '<div> <strong>Set {{styleObject.div_module_style.name}}: </strong> <input ng-model="styleObject.div_module_style.value"> </div>',
            link: linker
        };
    });