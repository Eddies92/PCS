(function () {
    'use strict';

    const body = document.body;
    const changeButton = document.getElementById('change');

    body.style.backgroundColor = 'black';
    body.style.color = 'white';


    changeButton.addEventListener('click', () => {
        body.style.backgroundColor = document.getElementById('background').value;
        body.style.color = document.getElementById('text').value;
    });

}());