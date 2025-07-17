//var images =
//['https://template55632.motopreview.com/mt-demo/55600/55632/mt-content/uploads/2015/10/mt-0169-home-slider1.jpg',
//'https://template55632.motopreview.com/mt-demo/55600/55632/mt-content/uploads/2015/10/mt-0169-home-slider2.jpg',
//'https://template55632.motopreview.com/mt-demo/55600/55632/mt-content/uploads/2015/10/mt-0169-home-slider3.jpg'];

// array of images
var slides = [
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

//Slider Image size :-
//2050 x 964
//1280 x 853


console.log("Hello world!");

const myName = "Jonas Schmedtmann";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Set current year
//const yearEl = document.querySelector(".year");
//const currentYear = new Date().getFullYear();
//yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});





