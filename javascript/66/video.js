/*global $*/

(function () {
    'use strict';

    let numOfVids = 0;

    function addVideo(newVideo) {
        $('#videos').append(`<div id="video${numOfVids++}"> <video src="${newVideo.linkUrl}" poster="${newVideo.photo}"></video><p>${newVideo.title}</p></div>`);
        $('#video0').click(function () {
            $('#video0 video')[0].play();
        });
        $('#video1').click(function () {
            $('#video1 video')[0].play();
        });
        $('#video2').click(function () {
            $('#video2 video')[0].play();
        });
        $('#video3').click(function () {
            $('#video3 video')[0].play();
        });
    }


    fetch('video.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(loadedVideos => {
            loadedVideos.forEach(addVideo);
            console.log(loadedVideos);
        })
        .catch(err => console.error(err));

}());