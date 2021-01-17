$(document).ready(function() {
    $('#lightSlider').lightSlider({
        gallery: true,
        item: 1,
        loop:true,
        slideMargin: 0,
        thumbItem: 9
    });

});

$(window).resize(function() {
    if ($(window).width() < 960) {
        var x = document.getElementsByClassName("bodycontent");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "inherit";
            x[i].style.margin = "0 auto";
        }
        var y = document.getElementsByTagName('footer');
        y[0].style.flexDirection="column";
        document.getElementById("picture").style.width=("100%");
    }
    else {
        var x = document.getElementsByClassName("bodycontent");
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "inline-block";
            x[i].style.margin = "";
        }
        var y = document.getElementsByTagName('footer');
        y[0].style.flexDirection="row";
    }
});
