'use strict';

angular.module('emailBuilderApp')
    .controller('ElementCtrl', ['$scope', '$sce', function ($scope, $sce) {
        $scope.enableStyle = function(htmlContent) {
            return $sce.trustAsHtml(htmlContent);
        };
    }]);