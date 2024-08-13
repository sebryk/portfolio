import data from '../data.json';
import imgWebp from '../../../images/portfolio/*.webp';
import imgJpg from '../../../images/portfolio/*.jpg';

const createModalContent = id => {
  const project = data.find(project => project.id === id);
  const modalContent = document.createElement('div');
  modalContent.className = 'modal__content';
  modalContent.innerHTML = `    
    <picture>
      <source srcset="${imgJpg[project.id]}">
      <source srcset="${imgWebp[project.id]}">
      <img class="modal__content-img" src="${imgWebp[project.id]}"
        alt="Preview Image of ${project.title}">
    </picture>
    <div class="modal__content-block">
      <h1 class="modal__content-title">${project.title}</h1>
      <p class="modal__content-desc">${project.description}</p>
      <p class="modal__content-stack">
        <strong>Стек:</strong> ${project.stack.join(', ')}
      </p>
      <div>
        <a href="${project.demoLink}" class="modal__content-link" target="_blank" rel="noopener">Demo</a>
        <a href="${project.githubLink}" class="modal__content-link" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
    <div class="modal__close-btn">&#x2715;</div>
  `;
  return modalContent;
};

export const modal = () => {
  const modal = document.querySelector('.modal');
  let modalContentElement;

  const openModal = id => {
    modalContentElement = createModalContent(id);
    if (!modalContentElement) return;

    modal.style.display = 'flex';
    modal.appendChild(modalContentElement);
    setTimeout(() => {
      modal.style.opacity = '1';
      modalContentElement.classList.add('modal__content--active');
      document.body.style.overflow = 'hidden';
    }, 50);
  };

  const closeModal = () => {
    if (!modalContentElement) return;

    modalContentElement.classList.remove('modal__content--active');
    modal.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
      modal.removeChild(modalContentElement);
      modalContentElement = null;
    }, 300);
  };

  const swiperSlides = document.querySelectorAll('.swiper-slide-img');

  swiperSlides.forEach(el => {
    el.addEventListener('click', e => {
      openModal(e.target.id);
    });
  });

  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.classList.contains('modal__close-btn')) {
      closeModal();
    }
  });
};
