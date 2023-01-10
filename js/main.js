// ==== Color theme change ==== //

// set a given theme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// toggle between themes
function toggleTheme() {
   if (localStorage.getItem('theme') === 'theme_dark'){
       setTheme('theme_light');
   } else {
       setTheme('theme_dark');
   }
}
// on load
(function () {
   if (localStorage.getItem('theme') === 'theme_dark') {
       setTheme('theme_dark');
   } else {
       setTheme('theme_light');
   }
})();

// ==== Lang menu ==== //
const showHideButton = document.getElementById('show_hide');

showHideButton.addEventListener('click', function hide() {
 let langMenu = document.getElementById('lang_menu');
 if (langMenu.className === 'hidden') {
  langMenu.classList.remove("hidden");
 }
 else {
  langMenu.classList.add("hidden");
 }
});

// ==== Mobile menu ==== // 
const showButton = document.getElementById("mobile_nav_btn");
const hideButton = document.getElementById("mobile_nav_hide");
const menu = document.getElementById("main_nav");
const body = document.getElementsByTagName("body");

showButton.addEventListener("click", function showMenu() {
  menu.classList.add("mobile");
  body[0].style.overflow = "hidden";
});

hideButton.addEventListener("click", function hideMenu() {
  let langMenu = document.getElementById("lang_menu");
  menu.classList.remove("mobile");
  body[0].style.overflow = "auto";

  if (langMenu.className !== "hidden") {
    langMenu.classList.add("hidden");
  }
});

// ==== SLider ==== // 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("visible");
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" current", "");
  }

  slides[slideIndex - 1].classList.add("visible");
  dots[slideIndex - 1].className += " current";
}


// ==== Scroll to top === //
const scrollBtn = document.getElementById("scrollTop");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
}

window.onscroll = function() {scrollFunction()};
