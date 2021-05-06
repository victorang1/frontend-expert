/* eslint max-len: ["error", { "code": 120 }]*/
const assert = require('assert');

Feature('Add Review');

Scenario('adding a review to selected restaurant', async ({ I }) => {
  I.amOnPage('/');

  const reviewersName = 'Anonymous 6';
  const reviewersDesc = 'Nice cuy!';

  I.seeElement('.rest-title a');
  I.click(locate('.rest-title a').at(3));

  I.seeElement('#name');
  I.seeElement('#review');
  I.seeElement('#btn-add-review');

  const currentVisibleCustomerReviews = await I.grabNumberOfVisibleElements('.review-item');

  I.fillField('#name', reviewersName);
  I.fillField('#review', reviewersDesc);
  I.click(locate('#btn-add-review'));

  I.waitForElement(locate('.review-item').at(currentVisibleCustomerReviews+1), 15);

  const lastName = await I.grabTextFrom(locate('.reviewer-name').at(currentVisibleCustomerReviews+1));
  const lastReview = await I.grabTextFrom(locate('.reviewer-text').at(currentVisibleCustomerReviews+1));

  console.log(lastName);
  console.log(lastReview);

  assert.strictEqual(reviewersName, lastName);
  assert.strictEqual(reviewersDesc, lastReview);
});
