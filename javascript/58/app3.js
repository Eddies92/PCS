window.app = window.app || {};

window.app.counter = (function (counter) {
    'use strict';

    counter.increment(10);
    const c1 = counter.newCounter();
    const c2 = counter.newCounter();
    c1.increment(5);
    c2.increment(15);
    counter.read();
    c1.read();
    c2.read();



    return counter;
}(window.app.counter || {}));