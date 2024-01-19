const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Sergei Brykalov'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 5000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 2700);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (textArray.length) setTimeout(type, 300);
});

const swiper = new Swiper('.swiper', {
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  breakpoints: {
    670: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const burgerMenu = () => {
  const burger = document.querySelector('.icon');
  const navMenu = document.querySelector('.nav__menu');
  const mobileMenu = document.querySelector('.nav__list');
  const menuLinks = document.querySelectorAll('.nav__list-item');
  const body = document.querySelector('body');

  const toggleBurger = () => {
    mobileMenu.classList.toggle('nav__list--active');
    burger.classList.toggle('icon--active');
    body.classList.toggle('body__lock');
    // navMenu.classList.toggle('nav__menu--shown');
  };

  const closeBurger = () => {
    mobileMenu.classList.remove('nav__list--active');
    burger.classList.remove('icon--active');
    body.classList.remove('body__lock');
    // navMenu.classList.remove('nav__menu--shown');
  };

  burger.addEventListener('click', toggleBurger);

  // navMenu.addEventListener('click', closeBurger);

  menuLinks.forEach(el => el.addEventListener('click', closeBurger));
};

burgerMenu();
