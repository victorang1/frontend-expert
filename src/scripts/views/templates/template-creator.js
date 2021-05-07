import { API_IMAGE } from '../../globals/config';
import {
  addReviewTemplate,
  createCategoryTemplate,
  createCustomerReviewItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createMenuTemplate,
  createRestaurantDetailTemplate,
} from './restaurant-detail-template-creator';

const createRestaurantItemTemplate = (restaurant) => `
    <article tabIndex="0" class="rest-item">
        <figure>
            <img
                class="rest-img lazyload"
                crossorigin="anonymous"
                data-src="${API_IMAGE.small(restaurant.pictureId)}" 
                alt="${restaurant.name}" />
            <figcaption>${restaurant.city}</figcaption>
        </figure>
        <div class="rest-item-body">
            <h2 class="rest-title">
                <a href="${`/#/detail/${restaurant.id}`}">
                    ${restaurant.name}<span class="rest-rating">(${
  restaurant.rating
}★)</span>
                </a>
            </h2>
            <div class="rest-desc">
                ${restaurant.description}
            </div>
        </div>
    </article>
`;

const createErrorTemplate = (msg = 'No Data') => `
    <h1 class="text-no-data">${msg}</h1>
`;

export { createErrorTemplate, createRestaurantItemTemplate };
export {
  addReviewTemplate,
  createCategoryTemplate,
  createCustomerReviewItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createMenuTemplate,
  createRestaurantDetailTemplate,
};
