import $ from 'jquery';
import UrlParser from '../../routes/url-parser';
import RestaurantRemoteSource from '../../data/restaurant-remote-source';
import {
  createRestaurantDetailTemplate,
  createCategoryTemplate,
  createMenuTemplate,
} from '../templates/template-creator';

import LikeButtonInitiator from '../../utils/like-button-initiator';
import CustomerReviewsInitiator from '../../utils/customer-reviews-initiator';
import AddReviewInitiator from '../../utils/add-review-initiator';

const DetailRestaurant = {
  async render() {
    return `<div id="detail-container"></div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailRestaurant = await RestaurantRemoteSource.getDetailRestaurant(
      url.id
    );
    const detailRestaurantContainer = $('#detail-container');
    detailRestaurantContainer.empty();
    detailRestaurantContainer.append(
      createRestaurantDetailTemplate(detailRestaurant)
    );

    const { menus, categories, customerReviews } = detailRestaurant;

    this._displayCategory(categories);
    this._displayMenu(menus);
    this._displayActionMenu(detailRestaurant);
    this._displayCustomerReviews(customerReviews);
    this._displayAddReviewContainer(url.id);
  },

  _displayCategory(categories) {
    const categoryContainer = $('.category-container');
    categories.forEach((category) =>
      categoryContainer.append(createCategoryTemplate(category))
    );
  },

  _displayMenu(menus) {
    const foodsContainer = $('#foods');
    const drinksContainer = $('#drinks');
    menus.foods.forEach((food) =>
      foodsContainer.append(createMenuTemplate(food))
    );
    menus.drinks.forEach((drink) =>
      drinksContainer.append(createMenuTemplate(drink))
    );
  },

  _displayActionMenu(detailRestaurant) {
    LikeButtonInitiator.init({
      likeButtonContainer: $('#action-container'),
      restaurant: detailRestaurant,
    });
  },

  _displayCustomerReviews(customerReviews) {
    CustomerReviewsInitiator.init({
      customerReviewsContainer: $('#reviews-container'),
      customerReviews,
    });
  },

  _displayAddReviewContainer(restaurantId) {
    AddReviewInitiator.init({
      restaurantId,
      addReviewContainer: $('#add-review-container'),
      refreshContent: this._displayCustomerReviews
    });
  }
};

export default DetailRestaurant;
