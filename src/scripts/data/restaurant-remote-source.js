import RESTAURANT_API from '../globals/api-endpoint';

class RestaurantRemoteSource {
  static async getListRestaurant() {
    const response = await fetch(RESTAURANT_API.getAllRestaurant);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailRestaurant(restaurantId) {
    const response = await fetch(RESTAURANT_API.detail(restaurantId));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async searchRestaurant(name) {
    const response = await fetch(RESTAURANT_API.searchRestaurant(name));
    return response.json();
  }

  static async addReview(data) {
    const response = await fetch(
        RESTAURANT_API.addReview, this._initAddReviewOptions(data),
    );
    return response.json();
  }

  static _initAddReviewOptions(data) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': '12345',
      },
      body: JSON.stringify(data),
    };
  }
}

export default RestaurantRemoteSource;
