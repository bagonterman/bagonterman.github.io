function move() {
    // console.log("made it")

    var shovel = document.querySelector("#shovel");
    shovel.addEventListener("click", function () {

        var classname = $(this).attr('class');
        if (classname == "shovelClick") {///toggle classes
            $("#shovel.shovelClick").addClass("active")
            console.log($(this).attr('class'))
        }
        else {
            $(this).removeClass("active")
            console.log($(this).attr('class'))
        }

    });
}
move()