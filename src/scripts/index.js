import 'regenerator-runtime'; /* for async await transpile */
import $ from 'jquery';
import App from './views/app';
import swRegister from './utils/sw-register';

import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../../node_modules/@fortawesome/fontawesome-free/js/all.js';
import '../styles/main.scss';
import '../styles/detail.scss';

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
