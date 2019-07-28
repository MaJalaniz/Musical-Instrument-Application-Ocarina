"use strict";

$(document).ready(function() {

    function konami(secret) {
        let input = " ";
        let pattern = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter";
        $(document).keyup(function (e) {
            input += e.key;
            if (input.indexOf(pattern) === 1) {
                secret();
                input = " 12";
            }
            console.log(input);
        });
    }

    $(document).ready(function () {
        konami(function () {
            //alert("Sounds");
            alert("Zounds! You have added 30 lives! Spend them wisely");
        });
    });
});