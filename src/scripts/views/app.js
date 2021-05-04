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
      this._content.empty();
      this._content.append(await page.render());
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
      heroContainer.style.visibility = 'visible';
      skipLinkContainer.style.visibility = 'visible';
    } else {
      heroContainer.style.visibility = 'hidden';
      skipLinkContainer.style.visibility = 'hidden';
    }
  }

  _showLoading(isVisible) {
    const loadingContainer = document.querySelector('.loader-container');
    if (isVisible) {
      loadingContainer.style.visibility = 'visible';
    } else loadingContainer.style.visibility = 'hidden';
  }

  _renderErrorMessage(msg) {
    const errorMessageContainer = document
        .querySelector('.error-message-container');
    errorMessageContainer.innerHTML = '';
    errorMessageContainer.innerHTML = createErrorTemplate(msg);
  }
}

export default App;
