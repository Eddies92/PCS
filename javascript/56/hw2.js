window.myApp = window.myApp || {};

window.myApp.weekUtils = (function (weekUtils) {
    'use strict';

    weekUtils.stringCaseInsensitiveEquals = function (string1, string2) {
        if (string1.toUpperCase() === string2.toUpperCase()) {
            return true;
        }
        return false;
    };

    return weekUtils;
}(window.myApp.weekUtils || {}));
