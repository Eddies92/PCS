(function () {
    'use strict';

    const canvas = document.getElementById('theCanvas');
    const context = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = SNAKE_SIZE * 12;
        canvas.height = SNAKE_SIZE * 10;
    }



    const SNAKE_SIZE = 64;
    let direction = 'ArrowRight';
    let x = -SNAKE_SIZE;
    let y = 0;
    const img = new Image();
    img.src = "images/snakehead.png";
    const apple = new Image();
    apple.src = "images/apple.png";

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    img.addEventListener('load', () => {
        setInterval(() => {
            context.clearRect(x, y, SNAKE_SIZE, SNAKE_SIZE);
            switch (direction) {
                case 'ArrowLeft':
                    x -= SNAKE_SIZE;
                    break;
                case 'ArrowRight':
                    x += SNAKE_SIZE;
                    break;
                case 'ArrowUp':
                    y -= SNAKE_SIZE;
                    break;
                case 'ArrowDown':
                    y += SNAKE_SIZE;
                    break;
            }

            context.drawImage(apple, x, y, SNAKE_SIZE, SNAKE_SIZE);
        }, 200);
        img.addEventListener('error', () => {
            context.strokeText('OOPS', 250, 250);
        });

    });

    document.addEventListener('keydown', event => {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight':
                direction = event.key;
        }
    });

    class Apple {
        addApple() {
            context.drawImage(appleImg)
        }
        getwidth() {
            return Math.floor((Math.random() * 12) * SNAKE_SIZE);
        }

        gethheight() {
            return Math.floor((Math.random() * 10) * SNAKE_SIZE);
        }
    }

}());