/**
 * Created by youri on 14-7-16.
 */
var index = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("bannerSlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    index++;
    if (index > x.length) {index = 1}
    x[index-1].style.display = "block";
    setTimeout(carousel, 3500); // Change image every 2 seconds
}