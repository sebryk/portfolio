export const modal = () => {
  const swiperSlides = document.querySelectorAll('.swiper-slide-img');
  const modal = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal__content');
  const modalClose = document.querySelector('.modal__close-btn');

  const closeModal = () => {
    modalContent.classList.remove('modal__content--active');
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }, 300);
  };

  const openModal = () => {
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.style.opacity = '1';
      modalContent.classList.add('modal__content--active');
      document.body.style.overflow = 'hidden';
    }, 50);
  };

  swiperSlides.forEach(el => {
    el.addEventListener('click', openModal);
  });
  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  });
};
