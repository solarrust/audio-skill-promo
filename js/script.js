
$(".slider").slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 variableWidth: true,
 centerMode: true
});


window.addEventListener("scroll", (e) => {
 const decor = document.querySelector("[data-parallax]");

 decor.style.top = - (window.pageYOffset * 0.1) + "px";
})
