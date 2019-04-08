// import  as BubbleSort from './library/dist/sort.js';
var BubbleSort = require('./library/dist/sort')

$(document).ready(function() {
    var bubbleSort = new BubbleSort();

    $('#btn').bind('click', function() {
        alert(bubbleSort);
    });
});