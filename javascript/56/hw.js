window.myApp = window.myApp || {};

window.myApp.weekUtils = (function (weekUtils) {
    'use strict';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


    weekUtils.getDay = function (index) {
        return days[index - 1];
    };

    weekUtils.getDayNum = function (name) {
        for (let i = 0; i < days.length; i++) {
            if (days[i] === name) {
                return i + 1;
            }
        }

        return 'Please insert a Valid Day Name';
    };
    return weekUtils;
}(window.myApp.weekUtils || {}));


