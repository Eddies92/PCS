/*global $*/
//(function () {
'use strict';

import './css/index.css';

import Snake from './images/snakehead.png';

import $ from 'jquery';

import index2, { sayHello2 } from './index2.js';

$('#button').click(() => {
    console.log('You clicked the button!!');
    const img = document.createElement('img');
    img.src = Snake;
    document.body.appendChild(img);

    index2();
    sayHello2();

});
//}());
