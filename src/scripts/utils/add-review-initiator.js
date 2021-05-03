import $ from 'jquery';
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
    this._addReviewContainer.empty();
    this._addReviewContainer.append(addReviewTemplate());
  },

  _setListener() {
    const btnAddReview = $('#btn-add-review');
    btnAddReview.on('click', (event) => {
      this._postReview();
      event.stopPropagation();
    });
  },

  async _postReview() {
    const inputName = $('#name');
    const inputReview = $('#review');
    
    if (inputName.val() == '' || inputReview.val() == '') {
      alert('All field must be input');
    }
    else {
      const body = {
        id: this._restaurantId,
        review: inputReview.val(),
        name: inputName.val(),
      };
      inputName.val('');
      inputReview.val('');
      try {
          const response = await RestaurantRemoteSource.addReview(body);
          const { customerReviews } = response;
          this._refreshContent(customerReviews)
      } catch (ex) {
          alert (ex);
      };
    }
  },
};

export default AddReviewInitiator;
