
window.app = window.app || {};

window.app.counter = (function (counter) {
    'use strict';

    let counterCounter = 0;

    counter.newCounter = function () {

        return {
            count: 0,

            counterCounterIncrement: (function () {
                counterCounter += 1;
                console.log('Created ' + counterCounter + ' counters');
            }()),

            increment: function (amount) {
                this.count += amount;
            },

            read: function () {
                console.log(this.count);
            },

            howMany: function () {
                console.log('Total counters ' + counterCounter);
            }
        };
    };

    return counter;

}(window.app.counter || {}));
