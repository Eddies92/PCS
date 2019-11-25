/*I didn't have time to finish but i figured this is better than nothing*/

import './css/index.css';

import $ from 'jquery';

import index2, { sayHello2 } from './index2.js';

/*$('#button').click(() => {
    console.log('You clicked the button!!');

    index2();
    sayHello2();

});*/
let min = 0;
let max = 2;
let postList = [];


function home() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(users => {
            userPost(users);
        })
        .catch(err => console.log(err));

}

function userPost(users) {
    users.forEach(user => {
        $('#container').append(`<div id="${user.id}"></div>`);
        $(`#${user.id}`).append(user.name).append('<br>').append(user.website).append('<br>').append(`${user.company.name} <br> ${user.company.catchPhrase} <br> ${user.company.bs}`)
            .click(() => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`${response.status} ${response.statusText}`);
                        }
                        return response.json();
                    })
                    .then(posts => {
                        loop(posts, user);
                        previous(this.post, this.i);
                        $('#container').append(`<button id="previous">Previous</button> <button id="next">Next</button> <button id="home">Home</button>`);
                        $(document).on('click', '#home', e => {
                            e.preventDefault();
                            home();
                        });
                        $('#next').click(() => {
                            if (max >= postList.length) {
                                max += 3;
                                min += 3;
                            }
                            loop(posts, user);
                        });

                    })
                    .catch(err => console.log(err));
            });
    });
}

function previous(post, i) {
    $('#previous').click(() => {
        if (min > 0) {
            min -= 3;
        }
    });
    posting(post, i);
}



function posting(post, i) {
    if (i >= min && i <= max) {
        $('#container').append(`${post.title}: ${post.body} <br>`);
    }
}

function loop(posts, user) {
    $('#container').empty();
    posts.forEach((post, i) => {
        if (user.id === post.userId) {
            postList.push(post);
        }
        posting(post, i);
    });
    $('#container').append(`<button id="previous">Previous</button> <button id="next">Next</button> <button id="home">Home</button>`);
}

home();
//$(document).on('click', '#home', home());
$('#next').click(() => {
    if (max >= postList.length) {
        max += 3;
        min += 3;
    }
    loop(posts, user);
});
