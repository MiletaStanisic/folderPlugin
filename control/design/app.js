(function (angular) {
    "use strict";
    //created folderPluginDesign module
    angular
        .module('folderPluginDesign', ['folderPluginServices', 'ui.bootstrap'])
        .provider('Buildfire', [function () {
            this.$get = function () {
                return buildfire;
            };
        }])
        .provider('Messaging', [function () {
            this.$get = function () {
                return buildfire.messaging;
            };
        }]);
})
(window.angular);