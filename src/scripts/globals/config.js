const CONFIG = {
  KEY: '12345',
  BASE_URL: 'https://restaurant-api.dicoding.dev',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images',
  CACHE_NAME: 'RestaurantCatalogue-V1',
  DATABASE_NAME: 'restaurant-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'favorites',
};

const API_IMAGE = {
  small: (pictureId) => `${CONFIG.BASE_IMAGE_URL}/small/${pictureId}`,
  medium: (pictureId) => `${CONFIG.BASE_IMAGE_URL}/medium/${pictureId}`,
  large: (pictureId) => `${CONFIG.BASE_IMAGE_URL}/large/${pictureId}`,
};

export { API_IMAGE };
export default CONFIG;
