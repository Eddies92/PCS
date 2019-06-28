const weekUtils = (function () {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturay'];

    return {
        getDay: function (index) {
            return days[index - 1];
        },

        getDayNum: function (name) {
            for (let i = 0; i < days.length; i++) {
                if (days[i] === name) {
                    return i + 1;
                }
            }

            return 'Please insert a Valid Day Name';
        }
    };
}());
console.log(weekUtils.getDay(5));
console.log(weekUtils.getDayNum('Thursday'));

const calculator = (function () {
    'use strict';
    let rate;
    let years;
    return {
        calcInterest: function (amount) {
            return amount * rate * years;
        },

        setRate: function (newRate) {
            rate = newRate;
        },

        setYears: function (newYears) {
            years = newYears;
        }
    };
}());

console.log('calculator.setYears(30)', calculator.setYears(30));
console.log('calculator.setRate(0.0395)', calculator.setRate(0.0395));
console.log('calculator.calcInterest(500000)', calculator.calcInterest(500000));