const hamburgerMenu = document.querySelector('.header-hamburger-menu-icon');
const body = document.querySelector('body');
const logo = document.querySelector('.header-logo');
const menu = document.querySelector('.header-menu');
const search = document.querySelector('.header-search-icon');
const title = document.querySelector('.header-title');
const btn = document.querySelector('.header-btn-link');
const socials = document.querySelector('.header-social-media');
const lineOne = document.querySelector('.line-one');
const lineTwo = document.querySelector('.line-two');
const lineThree = document.querySelector('.line-three');
const bgImage = document.querySelector('.header-background-image');
const backTop = document.querySelector('.back-top');



hamburgerMenu.addEventListener('click', () => {
  body.classList.toggle('responsive-menu');
})


// header animation
TweenMax.from(logo, 1, {
  opacity: 0,
  x: 10,
  ease: Expo.easeInOut
});

setTimeout(() => {
  menu.style.opacity = 1;
}, 3000)


TweenMax.from(title, 1, {
  opacity: 0,
  delay: 0.1,
  y: 10,
  ease: Expo.easeInOut
});

TweenMax.from(btn, 1, {
  opacity: 0,
  delay: 0.3,
  y: 10,
  ease: Expo.easeInOut
});

TweenMax.from(socials, 2, {
  opacity: 0,
  delay: 0.3,
  x: 10,
  ease: Expo.easeInOut
});

TweenMax.from(lineOne, 1, {
  opacity: 0,
  y: 5
});


TweenMax.from(lineTwo, 1, {
  width: 0,
  y: 5
});

TweenMax.from(lineThree, 1, {
  opacity: 0,
  delay: 0.2,
  y: 600,
  ease: Expo.easeInOut
});

TweenMax.from(bgImage, 2, {
  opacity: 0,
  delay: 0.8,
  y: -800,
  ease: Expo.easeInOut
});



const backToTop = () => {
  (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? backTop.style.display = "block" : backTop.style.display = "none";
}

window.onscroll = function(){
  backToTop();
}


backTop.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})