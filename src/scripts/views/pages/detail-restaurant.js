import $ from 'jquery';
import UrlParser from '../../routes/url-parser';
import RestaurantRemoteSource from '../../data/restaurant-remote-source';
import {
  createRestaurantDetailTemplate,
  createCategoryTemplate,
  createMenuTemplate
} from '../templates/template-creator';

const DetailRestaurant = {
  async render() {
    return `<div id="detail-container"></div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurant = await RestaurantRemoteSource.getDetailRestaurant(url.id);
    const detailRestaurantContainer = $('#detail-container');
    detailRestaurantContainer.empty();
    detailRestaurantContainer.append(
      createRestaurantDetailTemplate(detailRestaurant)
    );

    const { menus, categories } = detailRestaurant;

    this.displayCategory(categories);
    this.displayMenu(menus)
  },

  displayCategory(categories) {
    const categoryContainer = $('.category-container');
    categories.forEach((category) =>
      categoryContainer.append(createCategoryTemplate(category))
    );
  },

  displayMenu(menus) {
    const foodsContainer = $('#foods');
    const drinksContainer = $('#drinks');
    menus.foods.forEach((food) =>
      foodsContainer.append(createMenuTemplate(food))
    );
    menus.drinks.forEach((drink) =>
      drinksContainer.append(createMenuTemplate(drink))
    );
  },
};

export default DetailRestaurant;
