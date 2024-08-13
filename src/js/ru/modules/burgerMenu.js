export const burgerMenu = () => {
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
