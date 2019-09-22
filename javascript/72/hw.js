(function () {
    'use strict';

    class Vehicle {
        constructor(color) {
            this.color = color;
            this.speed = 0;
        }

        go(speed) {
            this.speed = speed;
            console.log('now goimg at', this.speed);
        }

        print() {
            console.log(this.color, this.speed);
        }
    }
    const v = new Vehicle('red');
    v.print();
    v.go(26);
    v.print();

    class Plane extends Vehicle {
        constructor(color) {
            super(color);
        }

        go(speed) {
            this.speed = speed;
            console.log('now flying at', this.speed);
        }
    }

    const p = new Plane('Blue');
    p.print();
    p.go(765);
    p.print();
}());