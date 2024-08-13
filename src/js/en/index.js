import { typing } from './modules/typing';
import { swiper } from './modules/swiper';
import { burgerMenu } from './modules/burgerMenu';
import { moveElementBasedOnWindowSize } from './modules/moveElement';
import { modal } from './modules/modal';

typing();

burgerMenu();

moveElementBasedOnWindowSize();
window.addEventListener('resize', moveElementBasedOnWindowSize);

modal();
