/*global $*/
(function () {
    'use strict';

    $('#loader').hide();

    $("#form").submit(function (e) {
        let fileName = $("#file").val();
        fetch(fileName)
            .then(r => {
                $('#loader').show();
                if (r.ok) {
                    return r.text();
                } else {
                    throw new Error(r.status);
                }
            })
            .then(rt => {
                $("p").append('Success', rt);
                $('#loader').hide();
            })
            .catch(err => {
                $('#dialog p').append(err);
                $('#loader').hide();
            });

        e.preventDefault();
        $("#form")[0].reset();
    });


}());