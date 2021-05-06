Feature('Liking Restaurants');

Scenario('liking a restaurant', ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.rest-title a');
  I.click(locate('.rest-title a').first());

  I.seeElement('.like-button');
  I.click('#btn-heart');

  I.seeElement('.detail-container');

  I.seeElement('.unlike-button');
  I.click('#btn-heart');
});


