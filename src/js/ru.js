const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Сергей Брыкалов'];
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

const showLink = () => {
  const swiperSlideImgs = document.querySelectorAll('.swiper-slide-img');
  const swiperSlideBtns = document.querySelectorAll('.swiper-slide-btn');

  swiperSlideImgs.forEach((img, index) => {
    if (swiperSlideBtns[index] && window.innerWidth > 900) {
      const btn = swiperSlideBtns[index];
      img.addEventListener('mouseover', () => {
        btn.style.opacity = '1';
        img.style.boxShadow = '0px 6px 6px 0px rgba(0, 0, 0, 0.35)';
        img.style.transform = 'translateY(-6px)';
      });
      btn.addEventListener('mouseover', () => {
        btn.style.opacity = '1';
        img.style.boxShadow = '0px 6px 6px 0px rgba(0, 0, 0, 0.35)';
        img.style.transform = 'translateY(-6px)';
      });
      img.addEventListener('mouseout', () => {
        btn.style.opacity = '0';
        img.style.boxShadow = 'none';
        img.style.transform = 'none';
      });
      btn.addEventListener('mouseout', () => {
        btn.style.opacity = '1';
      });
    }
  });
};
showLink();

const burgerMenu = () => {
  const burger = document.querySelector('.icon');
  const mobileMenu = document.querySelector('.nav__wrapper');
  const menuLinks = document.querySelectorAll('.nav__list-item');
  const body = document.querySelector('body');

  const toggleBurger = () => {
    mobileMenu.classList.toggle('nav__list--active');
    burger.classList.toggle('icon--active');
    body.classList.toggle('body__lock');
  };

  const closeBurger = () => {
    mobileMenu.classList.remove('nav__list--active');
    burger.classList.remove('icon--active');
    body.classList.remove('body__lock');
  };

  const closeBurgerAfterOutsideCick = e => {
    if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
      closeBurger();
    }
  };

  burger.addEventListener('click', toggleBurger);
  menuLinks.forEach(el => el.addEventListener('click', closeBurger));
  document.addEventListener('click', closeBurgerAfterOutsideCick);
};

burgerMenu();

const moveElementBasedOnWindowSize = () => {
  const navLanguage = document.querySelector('.nav__language');
  const navWrapper = document.querySelector('.nav__wrapper');
  const headerNav = document.querySelector('.header__nav');

  if (window.innerWidth < 765) {
    navWrapper.appendChild(navLanguage);
  } else {
    headerNav.appendChild(navLanguage);
  }
};

moveElementBasedOnWindowSize();

window.addEventListener('resize', moveElementBasedOnWindowSize);
