(function () {
    'use strict';

    function Vehicle(color) {
        this.color = color;
        this.speed = 0;

    }

    Vehicle.prototype.print = function () {
        console.log(this.color, this.speed);
    };

    Vehicle.prototype.go = function (speed) {
        this.speed = speed;
        console.log('Now going at', this.speed, 'MPH');
    };

    function Plane(color) {
        this.color = color;
        this.speed = 0;
    }

    Plane.prototype = Object.create(Vehicle.prototype);

    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log('Now flying at', this.speed, 'MPH');
    };

    const honda = new Vehicle('black');
    honda.go(75);
    honda.print();

    const boeing = new Plane('silver');
    boeing.go(1200);
    boeing.print();

}());