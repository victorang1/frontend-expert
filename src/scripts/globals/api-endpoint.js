import CONFIG from './config';

const RESTAURANT_API = {
  getAllRestaurant: `${CONFIG.BASE_URL}/list`,
  detail: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  searchRestaurant: (query) => `${CONFIG.BASE_URL}/search?q=${query}`,
  addReview: `${CONFIG.BASE_URL}/review`,
};

export default RESTAURANT_API;
