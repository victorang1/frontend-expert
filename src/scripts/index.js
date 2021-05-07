import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import App from './views/app';
import swRegister from './utils/sw-register';

import '../styles/main.scss';
import '../styles/detail.scss';
import '../styles/loading.scss';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('.hero'),
  content: document.querySelector('#main-wrapper'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
