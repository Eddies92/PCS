
window.app = window.app || {};

window.app.counter = (function (counter) {
    'use strict';

    counter.newCounter = function () {
        return {
            count: 0,

            increment: function (amount) {
                this.count += amount;
            },

            read: function () {
                console.log(this.count);
            }
        };
    };

    return counter;

}(window.app.counter || {}));
