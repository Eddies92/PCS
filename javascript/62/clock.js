window.clock = window.clock || {};

window.pcs.clock = (function () {
    'use strict';

    function startClock() {
        let hour = 12;
        let min = 0;
        let sec = 0;
        let newTime;
        let clock = document.getElementById('time');

        setInterval(() => {
            if (sec < 60) {
                sec++;
            } else if (min < 60) {
                min += 1;
                sec = 0;
            } else if (hour < 13) {
                hour += 1;
                min = 0;
                sec = 0;
            }
            newTime = (hour + ":" + min + ":" + sec);
            clock.innerHTML = newTime;

        }, 1000);
    }

    return startClock;

}());