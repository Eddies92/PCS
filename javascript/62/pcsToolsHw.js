window.pcs = window.pcs || {};

window.pcs.tools = (function () {
    'use strict';

    function changeColors(length) {
        let intervalId;

        function getColorPart() {
            return Math.floor(Math.random() * 256);
        }

        function getRandomColor() {
            const r = getColorPart();
            const g = getColorPart();
            const b = getColorPart();

            return `rgb(${r},${g},${b})`;
        }

        function setColors(color, backgroundColor) {
            document.body.style.color = color;
            document.body.style.backgroundColor = backgroundColor;
        }

        function startColors() {

            intervalId = setInterval(() => {
                const color = getRandomColor();
                const backgroundColor = getRandomColor();

                setColors(color, backgroundColor);
            }, 1000);
            //setTimeout(clearInterval(intervalId), length);
            setTimeout(function () {
                clearInterval(intervalId)
            }, length);
        }

        startColors();



    }

    let myData = {};



    return {
        changeColors: changeColors,
        data: function (key, value) {
            if (arguments.length < 2) {
                return myData[key];
            }
            myData[key] = value;
            return this;
        }
    };

}());