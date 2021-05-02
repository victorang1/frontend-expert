import RESTAURANT_API from '../globals/api-endpoint';

class RestaurantRemoteSource {
  static async getListRestaurant() {
    const response = await fetch(RESTAURANT_API.GET_ALL_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetailRestaurant(restaurantId) {
    const response = await fetch(RESTAURANT_API.DETAIL(restaurantId));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async searchRestaurant(name) {
    const response = await fetch(RESTAURANT_API.SEARCH_RESTAURANT(name));
    return response.json();
  }

  static async addReview(data) {
    const response = await fetch(RESTAURANT_API.ADD_REVIEW(), initAddReviewOptions(data));
    return response.json();
  }

  initAddReviewOptions(data) {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': '12345'
        },
        body: JSON.stringify(data)
    }
  }
}

export default RestaurantRemoteSource;
