'use strict';

function clickDropdown(dropdown) {
  const trigger = dropdown.querySelector('.dropdown__trigger');
  const content = dropdown.querySelector('.dropdown__content');
  const initialHeight = content.clientHeight;

  content.style.height = '0';
  content.style.opacity = '1';
  content.style.transform = 'translateY(0)';
  content.style.pointerEvent = 'auto';

  trigger.addEventListener('click', () => {
    if (content.clientHeight > 0) {
      content.style.height = '0';
      dropdown.classList.remove('dropdown--active');
    } else {
      content.style.height = `${initialHeight}px`;
      dropdown.classList.add('dropdown--active');
    }
  });

  const listItems = content.querySelectorAll('.dropdown__item');
  const triggerText = trigger.querySelector('.dropdown__trigger__text');

  listItems.forEach((li) => {
    li.addEventListener('click', () => {
      const liValue = li.getAttribute('data-value');

      triggerText.textContent = liValue;
      dropdown.classList.remove('dropdown--active');
      content.style.height = '0';
    });
  });

  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      content.style.height = '0';
      dropdown.classList.remove('dropdown--active');
    }
  });
}

module.exports = {
  clickDropdown,
};
