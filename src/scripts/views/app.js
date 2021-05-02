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
      hero: this._hero
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.empty();
    this._content.append(await page.render());
    this.validateHeroVisibility(url);
    await page.afterRender();
  }

  validateHeroVisibility(url) {
    const heroContainer = $('.hero');
    if (url === '/') {
      heroContainer.show();
    } else {
      heroContainer.hide();
    }
  }
}

export default App;
