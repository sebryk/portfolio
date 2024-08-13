export const moveElementBasedOnWindowSize = () => {
  const navLanguage = document.querySelector('.nav__language');
  const navWrapper = document.querySelector('.nav__wrapper');
  const headerNav = document.querySelector('.header__nav');

  if (window.innerWidth < 765) {
    navWrapper.appendChild(navLanguage);
  } else {
    headerNav.appendChild(navLanguage);
  }
};
