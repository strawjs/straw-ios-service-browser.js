
window.straw.service.browser = function (window, straw, Promise) {
    'use strict';

    var exports = {};

    exports.openURL = function (url) {

        return new Promise(function (resolve, reject) {
            straw.core.serviceCall('browser', 'openURL', {url: url}, resolve, reject);
        });

    };

    return exports;

}(window, window.straw, window.Promise);
