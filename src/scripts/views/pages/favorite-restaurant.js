import $ from 'jquery';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
  createRestaurantItemTemplate,
  createErrorTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section>
            <h1 class="main-heading" tabindex="0">Favorite Restaurant</h1>
            <div class="rests" id="restaurant-content">

            </div>
        </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = $('#restaurant-content');
    restaurantsContainer.empty();
    if (restaurants.length == 0) {
      restaurantsContainer.append(createErrorTemplate());
    }
    restaurants.forEach((movie) =>
      restaurantsContainer.append(createRestaurantItemTemplate(movie)),
    );
  },
};

export default Favorite;
