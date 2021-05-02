import $ from 'jquery';
import RestaurantRemoteSource from '../../data/restaurant-remote-source';
import { createMovieItemTemplate } from '../templates/template-creator';

const Upcoming = {
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
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Upcoming;
