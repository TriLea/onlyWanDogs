window.addEventListener("scroll", function(){
    var scrollTop = window.scrollY;
    document.body.style.backgroundPositionY = scrollTop * 0.8 + "px";
});