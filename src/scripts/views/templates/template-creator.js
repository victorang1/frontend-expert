import { API_IMAGE } from '../../globals/config';
import { 
    createRestaurantDetailTemplate, 
    createCategoryTemplate, 
    createMenuTemplate 
} from './restaurant-detail-creator';

const createRestaurantItemTemplate = (restaurant) => `
    <article tabIndex="0" class="rest-item">
        <figure>
            <img class="rest-img" src="${API_IMAGE.SMALL(restaurant.pictureId)}" alt="${restaurant.name}">
            <figcaption>${restaurant.city}</figcaption>
        </figure>
        <div class="rest-item-body">
            <h2 class="rest-title">
                <a href="${`/#/detail/${restaurant.id}`}">
                    ${restaurant.name}<span class="rest-rating">(${restaurant.rating}★)</span>
                </a>
            </h2>
            <div class="rest-desc">
                ${restaurant.description}
            </div>
        </div>
    </article>
`;

export {
    createCategoryTemplate,
    createMenuTemplate,
    createRestaurantItemTemplate,
    createRestaurantDetailTemplate
};
