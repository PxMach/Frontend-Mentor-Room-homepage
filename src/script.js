const sectionTwo = document.querySelector(".two");
const h2 = document.querySelector("h2");
const para = document.querySelector(".para");
const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");
const header = document.querySelector("header");

const topnav_menu = document.querySelector(".topnav_menu");
const hamburger = document.querySelector(".topnav_open .hamburger");
const topnav_close = document.querySelector(".topnav_close .btn-close");

let currentSlide = 1;
let isMobile = window.innerWidth <= 376;
let currentImage;

const slides = [
   {
      title: "Discover innovative ways to decorate",
      content: `We provide unmatched quality, comfort, and style for property
            owners across the country. Our experts combine form and function
            in bringing your vision to life. Create a room in your own style
            with our collection and make your property a reflection of you
            and what you love.`,
      desktopImage: "./images/desktop-image-hero-1.jpg",
      mobileImage: "./images/mobile-image-hero-1.jpg",
   },
   {
      title: "We are available all across the globe",
      content: `With stores all over the world, it's easy for you to find furniture
            for your home or place of business. Locally, we're in most major
            cities throughout the country. Find the branch nearest you using our
            store locator. Any questions? Don't hesitate to contact us today.`,
      desktopImage: "./images/desktop-image-hero-2.jpg",
      mobileImage: "./images/mobile-image-hero-2.jpg",
   },
   {
      title: "Manufactured with the best materials",
      content: `Our modern furniture store provide a high level of quality. Our
            company has invested in advanced technology to ensure that every
            product is made as perfect and as consistent as possible. With three
            decades of experience in this industry, we understand what customers
            want for their home and office.`,
      desktopImage: "./images/desktop-image-hero-3.jpg",
      mobileImage: "./images/mobile-image-hero-3.jpg",
   },
];

function updateSlide() {
   h2.textContent = slides[currentSlide - 1].title;
   para.textContent = slides[currentSlide - 1].content;

   if (isMobile) {
      currentImage = slides[currentSlide - 1].mobileImage;
   } else {
      currentImage = slides[currentSlide - 1].desktopImage;
   }
   header.style.backgroundImage = `url(${currentImage})`;
}

// Détecter les changements de taille d'écran
window.addEventListener("resize", () => {
   isMobile = window.innerWidth <= 376;
   updateSlide();
});

buttonRight.addEventListener("click", () => {
   currentSlide = currentSlide === slides.length ? 1 : currentSlide + 1;
   updateSlide();
});

buttonLeft.addEventListener("click", () => {
   currentSlide = currentSlide === 1 ? slides.length : currentSlide - 1;
   updateSlide();
});

// navigation
function useNav() {
   // open menu
   hamburger.addEventListener("click", () => {
      topnav_menu.style.display = "flex";
   });

   // close menu
   topnav_close.addEventListener("click", () => {
      topnav_menu.style.display = "none";
   });
}
useNav();
