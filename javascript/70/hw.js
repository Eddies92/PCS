/*global $*/
(function () {
    'use strict';

    let dragging;
    let offset;
    let index = 2;

    $(document)
        .on('mousedown', '.parts', e => {
            dragging = $(e.target);
            offset = { y: e.offsetY, x: e.offsetX };
        }).mousemove(e => {
            if (dragging) {
                dragging.css({ position: 'absolute', zIndex: ++index, top: e.pageY - offset.y, left: e.pageX - offset.x });
                e.preventDefault();
            }
        }).mouseup(() => dragging = null);
}());