window.app = window.app || {};

window.app.counter = (function (counter) {
    'use strict';

    let count = 0;

    counter.increment = function (amount) {
        count += amount;
    };

    counter.read = function () {
        console.log(count);
    };
    return counter;
}(window.app.counter || {}));
