// array of images
(function () { var slides = [
  { src: "/images/earthslider/slider1.jpg" },
  { src: "/images/earthslider/slider2.jpg" },
  { src: "/images/earthslider/slider3.jpg" },
  {
    video: {
      src: ["/images/earthslider/slider.mp4"],
      loop: true,
      mute: true,
    },
  },
];

$(".slider").vegas({
  shuffle: true,
  cover: true,
  trasition: "fade",
  slides: slides,
  overlay: "/images/ushma/07.png",
});


const myName = "Jonas Schmedtmann";
const h1 = document.querySelector(".heading-primary");


///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

})();




