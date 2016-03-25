'use strict';

angular.module('emailBuilderApp')
    .directive('elementDirective', ['$http', '$compile', 'ElementService', function ($http, $compile, ElementService) {
        var linker = function ($scope, element) {
            $scope.enableStyle = ElementService.emableStyle;
            // Get template content from path
            var templateUrl = ElementService.getTemplateUrl($scope.element);
            $http.get(templateUrl).then(function (response) {
                element.html(response.data);
                $compile(element.contents())($scope);
            });
        };

        return {
            restrict: 'EA',
            replace: true,
            scope: {
                element: '='
            },
            link: linker
        };
    }]);