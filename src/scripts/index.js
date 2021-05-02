import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import $ from 'jquery';
import App from './views/app';
import swRegister from './utils/sw-register';

// const restaurantContainer = $('#restaurant-content');
// const topRestaurantContainer = $('#top-restaurant-content');

const app = new App({
  button: $('#menu'),
  drawer: $('#drawer'),
  content: $('#main-wrapper'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
//   WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
