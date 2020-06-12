$(".slider").slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 variableWidth: true,
 centerMode: true
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
