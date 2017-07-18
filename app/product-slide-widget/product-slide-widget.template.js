$(document).ready(function() {

$("#arrow-button").click(function () {
    var leftPos = $('.list').scrollLeft();
    $(".list").animate({scrollLeft: leftPos - 600}, 300);
});

$("#left").click(function () {
    var leftPos = $('.list').scrollLeft();
    $(".list").animate({scrollLeft: leftPos + 600}, 300);
    console.log("clicked")
});
});