$(document).ready(function () {

    var folder = "../assets/images/slideShow/";

    $.ajax({
        url: folder,
        success: function (data) {
            //console.log(data)
            $(data).find("a").attr("href", function (i, val) {

                if (val.match(/\.(JPG|jpg|png|gif)$/)) {
                    //<img src="https://wallpaperscraft.com/image/planet_light_spots_space_86643_1920x1080.jpg" />
                    console.log(val)
                    $("#Slider").append("<img class='slideShowImage' src='" + val + "'>");
                }
            });
        }
    });




});