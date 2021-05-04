import RestaurantRemoteSource from '../data/restaurant-remote-source';
import { addReviewTemplate } from '../views/templates/template-creator';

const AddReviewInitiator = {
  async init({ restaurantId, addReviewContainer, refreshContent }) {
    this._restaurantId = restaurantId;
    this._addReviewContainer = addReviewContainer;
    this._refreshContent = refreshContent;
    this._renderAddReview();
    this._setListener();
  },

  _renderAddReview() {
    this._addReviewContainer.innerHTML = '';
    this._addReviewContainer.innerHTML = addReviewTemplate();
  },

  _setListener() {
    const btnAddReview = document.querySelector('#btn-add-review');
    btnAddReview.addEventListener('click', (event) => {
      this._postReview();
      event.stopPropagation();
    });
  },

  async _postReview() {
    const inputName = document.querySelector('#name');
    const inputReview = document.querySelector('#review');

    if (inputName.value == '' || inputReview.value == '') {
      alert('All field must be input');
    } else {
      const body = {
        id: this._restaurantId,
        review: inputReview.value,
        name: inputName.value,
      };
      inputName.value = '';
      inputReview.value = '';
      try {
        const response = await RestaurantRemoteSource.addReview(body);
        const { customerReviews } = response;
        this._refreshContent(customerReviews);
      } catch (ex) {
        alert(ex);
      }
    }
  },
};

export default AddReviewInitiator;
