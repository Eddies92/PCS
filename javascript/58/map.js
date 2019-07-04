(function () {
    'use strict';

    function myMap(array, callback) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            newArray[i] = callback(array[i]);
        }
        return newArray;
    }

    function doubler(number) {
        return number *= 2;
    }

    const numberArray = [3, 7, 2, 6, 8];
    const numberArray2 = [2, 5, 8, 10];
    console.log(myMap(numberArray, doubler));
    console.log(myMap(numberArray2, doubler));
}());