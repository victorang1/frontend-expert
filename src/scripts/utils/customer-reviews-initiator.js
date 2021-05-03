import { createCustomerReviewItemTemplate } from '../views/templates/template-creator';

const CustomerReviewsInitiator = {
  async init({ customerReviewsContainer, customerReviews }) {
    this._customerReviewsContainer = customerReviewsContainer;
    this._customerReviews = customerReviews;
    this._renderReviews();
  },

  _renderReviews() {
    this._customerReviewsContainer.empty();
    this._customerReviews.forEach((item) =>
      this._customerReviewsContainer.append(
        createCustomerReviewItemTemplate(item)
      )
    );
  },
};

export default CustomerReviewsInitiator;
