/*global $*/

(function () {
    'use strict';

    let numOfVids = 0;

    function addVideo(newVideo) {
        $('#videos').append(`<div id="video${numOfVids++}"> <video src="${newVideo.linkUrl}" poster="${newVideo.photo}"></video><p>${newVideo.title}</p></div>`);
    }

    function playVid() {
        $('#video0').click(function () {
            if ($('#video0 video')[0].paused) {
                $('#video0 video')[0].play();
            } else {
                $('#video0 video')[0].pause();
            }
        });
        $('#video1').click(function () {
            if ($('#video1 video')[0].paused) {
                $('#video1 video')[0].play();
            } else {
                $('#video1 video')[0].pause();
            }
        });
        $('#video2').click(function () {
            if ($('#video2 video')[0].paused) {
                $('#video2 video')[0].play();
            } else {
                $('#video2 video')[0].pause();
            }
        });
        $('#video3').click(function () {
            if ($('#video3 video')[0].paused) {
                $('#video3 video')[0].play();
            } else {
                $('#video3 video')[0].pause();
            }
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
        })
        .then(playVid)
        .catch(err => console.error(err));

}());