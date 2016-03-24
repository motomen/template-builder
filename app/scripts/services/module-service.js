'use strict';

angular.module('emailBuilderApp')
    .service('ModuleService', function ($http) {
        var moduleJsonPath = 'static/sample_module.json';

        return {
            module: function (id) {
                return $http.get(moduleJsonPath).then(function (response) {
                    var requestModule = {};
                    angular.forEach(response.data, function (module) {
                        if (module.id === id) {
                            requestModule = module;
                        }
                    });
                    return requestModule;
                });
            },
            modules: function () {
                return $http.get(moduleJsonPath).then(function (response) {
                    return response.data;
                });
            }
        };
    });