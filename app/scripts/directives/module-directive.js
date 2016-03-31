'use strict';

angular.module('emailBuilderApp')
    .directive('module', ['$http', '$compile', 'ElementService', function ($http, $compile, ElementService) {
        var linker = function ($scope, element) {

            $scope.isVisibleEditor = false;

            $scope.setEditorVisibility = function () {
                $scope.isVisibleEditor = !$scope.isVisibleEditor;
            };

            $scope.deleteModule = $scope.$parent.deleteModule;

            $scope.enableStyle = ElementService.emableStyle;
            // Get template content from path
            var templateUrl = ElementService.getTemplateUrl($scope.module);
            $http.get(templateUrl).then(function (response) {
                element.html(response.data);
                $compile(element.contents())($scope);
            });
        };

        return {
            restrict: 'EA',
            replace: true,
            scope: {
                module: '=',
                index: '='
            },
            link: linker
        };
    }]);