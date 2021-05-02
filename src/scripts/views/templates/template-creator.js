import { API_IMAGE } from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
    <article tabIndex="0" class="rest-item">
        <figure>
            <img class="rest-img" src="${API_IMAGE.SMALL(restaurant.pictureId)}" alt="${restaurant.name}">
            <figcaption>${restaurant.city}</figcaption>
        </figure>
        <div class="rest-item-body">
            <h2 class="rest-title">${restaurant.name}
                <span class="rest-rating">(${restaurant.rating}★)</span>
            </h2>
            <div class="rest-desc">
                ${restaurant.description}
            </div>
        </div>
    </article>
`;

export { createRestaurantItemTemplate };
