"use strict"
var box = document.getElementById('box');
var clickcount = document.getElementById('click-btn');
var count = 0;
box.addEventListener('click', function () {
    count++;
    clickcount.innerHTML = count;
});