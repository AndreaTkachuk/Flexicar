'use strict';

// import { clickDropdown } from './utils.js';

const dropdownLang = document.querySelector('.dropdown');

clickDropdown(dropdownLang);

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

const extrasOptions = document.querySelectorAll('.extras__option');

extrasOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const icon = option.querySelector('.icon--plus, .icon--minus');

    if (icon.classList.contains('icon--plus')) {
      icon.classList.remove('icon--plus');
      icon.classList.add('icon--minus');
      option.classList.add('added');
    } else {
      icon.classList.remove('icon--minus');
      icon.classList.add('icon--plus');
      option.classList.remove('added');
    }
  });
});

const insuranceOptions = document.querySelectorAll('.insurance__option');

insuranceOptions.forEach((option) => {
  option.addEventListener('click', () => {
    insuranceOptions.forEach((otherOption) => {
      otherOption.classList.remove('added');

      const iconsOk = otherOption.querySelectorAll('.icon--ok');

      iconsOk.forEach((icon) => {
        icon.classList.remove('icon--ok');
        icon.classList.add('icon--ok-green');
      });
    });

    option.classList.add('added');

    const icons = option.querySelectorAll('.icon--ok-green');

    icons.forEach((icon) => {
      icon.classList.remove('icon--ok-green');
      icon.classList.add('icon--ok');
    });
  });
});
