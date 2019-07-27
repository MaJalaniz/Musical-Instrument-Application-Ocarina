"use strict";

/*
let subHeaders = function(){
    document.getElementById('sub-header').style.color = "blue";
};
document.getElementById('chair').addEventListener('click', subHeaders, false);
*/

let aButtons = function(event) {
    document.getElementsByClassName('aButton').style.color = 'yellow';
};
document.getElementsByClassName('aButton').addEventListener('onclick', aButtons, false);