import { API_IMAGE } from '../../globals/config';

export const createRestaurantDetailTemplate = ({
  name,
  description,
  city,
  address,
  pictureId,
  rating,
}) => `
    <div class="detail-container">
        <div class="card-container">
            <div id="action-container"></div>
            <img
                class="img-content lazyload" 
                crossorigin="anonymous"
                data-src="${API_IMAGE.small(pictureId)}" 
                alt="${name}" />
            <div class="card-content-body">
                <div tabIndex="0" class="show-title">
                    ${name}<span class="rest-rating">(${rating}★)</span>
                </div>
                <div class="category-container">
                </div>
                <div tabIndex="0" class="content-title">Address</div>
                <div tabIndex="0" class="show-desc mb-1 text-address">
                    ${address}, ${city}
                </div>
                <div tabIndex="0" class="content-title">Description</div>
                <div tabIndex="0" class="show-desc mb-1 text-description">
                    ${description}
                </div>
                <div class="menu-container">
                    <div class="menu-box-container">
                        <div tabIndex="0" class="content-title">Foods</div>
                        <div id="foods" class="menu-list"></div>
                    </div>
                    <div class="menu-box-container">
                        <div tabIndex="0" class="content-title">Drinks</div>
                        <div id="drinks" class="menu-list"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="reviews-box">
            <h1 tabIndex="0" class="reviews-section">Customer Reviews</h1>
            <div id="reviews-container">

            </div>
            <div id="add-review-container">

            </div>
        </div>
    </div>
`;

export const createCategoryTemplate = ({ name }) => `
    <span tabIndex="0" class="card-category">
        ${name}
    </span>
`;

export const createMenuTemplate = ({ name }) => `
    <span tabIndex="0" class="menu-item">
        ${name}
    </span>
`;

export const createLikeButtonTemplate = () => `
    <button id="btn-heart" aria-label="like restaurant" 
        class="btn-rounded like-button">
        <i class="far fa-heart"></i>
    </button>
`;

export const createLikedButtonTemplate = () => `
    <button id="btn-heart" aria-label="unlike restaurant" 
        class="btn-rounded unlike-button">
        <i class="fas fa-heart"></i>
    </button>
`;

export const createCustomerReviewItemTemplate = ({ name, review, date }) => `
    <div class="review-item">
        <span class="btn-rounded icon-reviews">
            <i class="fas fa-user-edit"></i>
        </span>
        <div class="review-item-body">
            <div class="review-header">
                <b tabIndex="0" class="reviewer-name">${name}</b>
                <span tabIndex="0" class="review-date">(${date})</span>
            </div>
            <div tabIndex="0" class="reviewer-text">${review}</div>
        </div>
    </div>
`;

export const addReviewTemplate = () => `
    <h1 tabIndex="0" class="reviews-section">Add Review</h1>
    <input type="text" placeholder="Input your name" name="name" id="name" />
    <textarea 
        placeholder="Input your review"
        name="review"
        id="review"
        rows="5"
    ></textarea>
    <button id="btn-add-review">Add Review</button>
`;
