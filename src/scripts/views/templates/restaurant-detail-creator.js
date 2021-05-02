import { API_IMAGE } from '../../globals/config';

export const createRestaurantDetailTemplate = ({ name, description, city, address, pictureId }) => `
    <div class="card-container">
        <img src="${API_IMAGE.SMALL(pictureId)}" alt="${name}">
        <div class="card-content-body">
            <div class="show-title">
                ${name}
            </div>
            <div class="category-container">
            </div>
            <div class="content-title">Address</div>
            <div class="show-desc mb-1 text-address">
                ${address}, ${city}
            </div>
            <div class="content-title">Description</div>
            <div class="show-desc mb-1 text-description">
                ${description}
            </div>
            <div class="menu-container">
                <div class="menu-box-container">
                    <div class="content-title">Foods</div>
                    <div id="foods" class="menu-list"></div>
                </div>
                <div class="menu-box-container">
                    <div class="content-title">Drinks</div>
                    <div id="drinks" class="menu-list"></div>
                </div>
            </div>
            <button id="btn-heart" class="btn-rounded">
                <i class="fa fa-heart"></i>
            </button>
        </div>
    </div>
`

export const createCategoryTemplate = ({ name }) => `
    <span class="card-category">
        ${name}
    </span>
`

export const createMenuTemplate = ({ name }) => `
    <span class="menu-item">
        ${name}
    </span>
`