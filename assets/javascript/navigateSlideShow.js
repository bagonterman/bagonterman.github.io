$("#Next").click(function () {
    $("#Slider").append($("#Slider img:first-of-type"));
});

$("#Prev").click(function () {
    $("#Slider").prepend($("#Slider img:last-of-type"));
});