import './styles.css';
import menu from './menu.json';
import menuCardsTpl from './templates/menu.hbs';

const menuRef = document.querySelector('.js-menu');
const menuMarkup = menuCardsTpl(menu);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const switchEl = document.querySelector('#theme-switch-toggle');
switchEl.addEventListener('change', onChangedSwitch);

function onChangedSwitch() {
  if (localStorage.theme === Theme.LIGHT) {
    bodyRef.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

if (localStorage.getItem('theme') === Theme.DARK) {
  bodyRef.classList.add(Theme.DARK);
  switchEl.checked = 'true';
} else {
  localStorage.setItem('theme', Theme.LIGHT);
  bodyRef.classList.add(Theme.LIGHT);
}
