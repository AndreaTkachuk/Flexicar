'use strict';

const dropdownLang = document.querySelector('.dropdown--lang');
const dropdownPhone = document.querySelector('.dropdown--phone');

clickDropdown(dropdownLang);
clickDropdown(dropdownPhone);

// Function to handle dropdown click events
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

// Add event listeners to each extras option
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

// Add event listeners to each insurance option
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

const hero = document.querySelector('#hero');
const extras = document.querySelector('#extras');
const insurance = document.querySelector('#insurance');
const confirmBlock = document.querySelector('#confirm');
const heroButton = document.querySelector('.hero__button');

// Show/hide elements based on the initial width of the window
heroButton.addEventListener('click', () => {
  heroButton.classList.add('hidden');
  hero.classList.add('hidden');
  extras.classList.remove('hidden');
});

document.querySelector('.extras__button').addEventListener('click', () => {
  extras.classList.add('hidden');
  insurance.classList.remove('hidden');
});

document.querySelector('.insurance__button').addEventListener('click', () => {
  insurance.classList.add('hidden');
  confirmBlock.classList.remove('hidden');
});

document.querySelector('.confirm__button__fin')
  .addEventListener('click', () => {
    if (window.innerWidth < 1024) {
      confirmBlock.classList.add('hidden');
      hero.classList.remove('hidden');
      heroButton.classList.remove('hidden');
    }
    // eslint-disable-next-line no-undef
    alert('Thanks for your order!');
  });

// Show/hide elements based on the initial width of the window
window.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth >= 1024) {
    extras.classList.remove('hidden');
    insurance.classList.remove('hidden');
    confirmBlock.classList.remove('hidden');
  }
});

// Check the width of the window and show/hide elements accordingly
function checkWidth() {
  const asides = document.querySelectorAll('aside');

  asides.forEach((aside) => {
    if (window.innerWidth >= 1024) {
      aside.classList.remove('hidden');
      heroButton.classList.add('hidden');
    } else {
      aside.classList.add('hidden');
      heroButton.classList.remove('hidden');
    }
  });
}

window.addEventListener('resize', checkWidth);
