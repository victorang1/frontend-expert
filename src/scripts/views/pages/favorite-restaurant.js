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
    const restaurantsContainer = document.querySelector('#restaurant-content');
    restaurantsContainer.innerHTML = '';
    if (restaurants.length == 0) {
      restaurantsContainer.innerHTML = createErrorTemplate();
    }
    restaurants.forEach((movie) =>
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(movie),
    );
  },
};

export default Favorite;
