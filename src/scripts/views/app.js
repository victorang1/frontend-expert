import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import { createErrorTemplate } from '../views/templates/template-creator';

class App {
  constructor({ button, drawer, content, hero }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._hero = hero;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      hero: this._hero,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    try {
      this._showLoading(true);
      this._content.innerHTML = '';
      this._content.innerHTML = await page.render();
      this._validateContentVisibility(url);
      await page.afterRender();
    } catch (ex) {
      this._renderErrorMessage(ex);
    } finally {
      this._showLoading(false);
    }
  }

  _validateContentVisibility(url) {
    const heroContainer = document.querySelector('.hero');
    const skipLinkContainer = document.querySelector('.skip-link');
    if (url === '/') {
      heroContainer.style.display = 'flex';
      skipLinkContainer.style.display = 'block';
    } else {
      heroContainer.style.display = 'none';
      skipLinkContainer.style.display = 'none';
    }
  }

  _showLoading(isVisible) {
    const loadingContainer = document.querySelector('.loader-container');
    if (isVisible) {
      loadingContainer.style.display = 'inline-block';
    } else loadingContainer.style.display = 'none';
  }

  _renderErrorMessage(msg) {
    const errorMessageContainer = document
        .querySelector('.error-message-container');
    errorMessageContainer.innerHTML = '';
    errorMessageContainer.innerHTML = createErrorTemplate(msg);
  }
}

export default App;
