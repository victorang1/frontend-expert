import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import $ from "jquery";
import data from '../DATA.json';

const menu = $('#menu');
const drawer = $('#drawer');
const restaurantContainer = $('#restaurant-content');
const topRestaurantContainer = $('#top-restaurant-content');

menu.on('click', () => {
    drawer.toggleClass('open');
    event.stopPropagation();
});

data.restaurants.forEach(item => {
    restaurantContainer.append(`
        <article tabIndex="0" class="rest-item">
            <figure>
                <img class="rest-img" src="${item.pictureId}" alt="${item.name} Restaurant Image">
                <figcaption>${item.city}</figcaption>
            </figure>
            <div class="rest-item-body">
                <h2 class="rest-title">${item.name} <span class="rest-rating">(${item.rating}★)</span></h2>
                <p>
                    ${item.description}
                </p>
            </div>
        </article>
    `)
})

data.topRestaurants.forEach(item => {
    topRestaurantContainer.append(`
        <article tabIndex="0" class="rest-item">
            <figure>
                <img class="rest-img" src="${item.pictureId}" alt="${item.name} Restaurant Image">
                <figcaption>${item.city}</figcaption>
            </figure>
            <div class="rest-item-body">
                <h2 class="rest-title">${item.name} <span class="rest-rating">(${item.rating}★)</span></h2>
                <p>
                    ${item.description}
                </p>
            </div>
        </article>
    `)
})