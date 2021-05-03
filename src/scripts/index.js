import 'regenerator-runtime'; /* for async await transpile */
import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

import App from './views/app';
import swRegister from './utils/sw-register';

import '../styles/main.scss';
import '../styles/detail.scss';
import '../styles/loading.scss';

const app = new App({
  button: $('#menu'),
  drawer: $('#drawer'),
  hero: $('.hero'),
  content: $('#main-wrapper'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
