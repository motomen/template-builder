'use strict';

angular.module('emailBuilderApp')
    .controller('BuilderCtrl', ['$scope', 'ModuleService', function ($scope, ModuleService) {
        $scope.modules = [];

        ModuleService.modules().then(function (modules) {
            $scope.modules = modules;
        });

        $scope.template = [];

        var tempData = null;

        var setTempData = function (value) {
            tempData = value;
        };

        $scope.dropSuccessHandler = function ($event, index, array) {
            if (tempData !== null) {
                array.splice(index, 1, tempData);
                setTempData(null);
            } else {
                array.splice(index, 1);
            }
        };

        $scope.onDrop = function ($event, $data, array, index) {
            if (index !== undefined) {
                setTempData(array[index]);
                array.splice(index, 1, $data);
            } else {
                array.push($data);
                setTempData(null);
            }
        };

        $scope.$on('templateRenderFinished', function(ngRepeatFinishedEvent) {
            $scope.$broadcast('renderFinished');
        });

        $scope.deleteModule = function (index) {
            $scope.template.splice(index, 1);
        };

        $scope.isDisplayModules = true;
        $scope.isDisplayStylePanel = false;

        $scope.displayModules = function () {
            if (!$scope.isDisplayModules) {
                $scope.isDisplayModules = true;
                $scope.isDisplayStylePanel = false;
            }
        };

        $scope.displayStylesPanel = function () {
            if (!$scope.isDisplayStylePanel) {
                $scope.isDisplayStylePanel = true;
                $scope.isDisplayModules = false;
            }
        };
    }]);