import $ from 'jquery';
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

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
    console.log(url);
    const page = routes[url];
    this._showLoading(true);
    this._content.empty();
    this._content.append(await page.render());
    this._validateContentVisibility(url);
    await page.afterRender();
    this._showLoading(false);
  }

  _validateContentVisibility(url) {
    const heroContainer = $('.hero');
    const skipLinkContainer = $('.skip-link');
    if (url === '/') {
      heroContainer.show();
      skipLinkContainer.show();
    } else {
      heroContainer.hide();
      skipLinkContainer.hide();
    }
  }

  _showLoading(isVisible) {
    const loadingContainer = $('.loader-container');
    if (isVisible) {
      loadingContainer.show();
    } else loadingContainer.hide();
  }
}

export default App;
