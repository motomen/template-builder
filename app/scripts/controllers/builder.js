'use strict';

angular.module('emailBuilderApp')
    .controller('BuilderCtrl', ['$scope', 'ModuleService', function ($scope, ModuleService) {
        $scope.modules = [];

        ModuleService.modules().then(function (modules) {
            $scope.modules = modules;
        });

        $scope.templateEmail = [];

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
    }]);