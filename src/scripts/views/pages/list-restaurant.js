import $ from 'jquery';
import RestaurantRemoteSource from '../../data/restaurant-remote-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
        <section>
            <h1 class="main-heading" tabindex="0">Explore Restaurant</h1>
            <div class="rests" id="restaurant-content">

            </div>
        </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantRemoteSource.getListRestaurant();
    const restaurantsContainer = $('#restaurant-content');
    restaurantsContainer.empty();
    restaurants.forEach((movie) => {
      restaurantsContainer.append(createRestaurantItemTemplate(movie));
    });
  },
};

export default ListRestaurant;
