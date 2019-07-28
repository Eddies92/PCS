/*global $*/
(function () {
    'use strict';

    $("#form").submit(function (e) {
        let nameVal = $("#name").val();
        let addressVal = $("#address").val();
        $("p").append(nameVal, " ", addressVal);
        e.preventDefault();
        $("#form")[0].reset();
    });

    $('#submit').prop("disabled", true);
    $("#disable").click(function () {
        if ($(this).prop("checked") === true) {
            $('#submit').prop("disabled", false);
        }
        else if ($(this).prop("checked") === false) {
            $('#submit').prop("disabled", true);
        }
    });




}());