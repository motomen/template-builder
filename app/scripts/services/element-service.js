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
    .service('ElementService', ['$sce', function ($sce) {
        var moduleJsonPath = 'static/sample_module.json';

        return {
            getTemplateUrl: function (element) {
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
            },
            emableStyle: function(htmlContent) {
                return $sce.trustAsHtml(htmlContent);
            }
        };
    }]);