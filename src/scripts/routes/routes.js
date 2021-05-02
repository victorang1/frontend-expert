import ListRestaurant from '../views/pages/list-restaurant';
import DetailRestaurant from '../views/pages/detail-restaurant';

const routes = {
  '/': ListRestaurant,
  '/detail/:id': DetailRestaurant,
//   '/now-playing': NowPlaying,
//   '/upcoming': Upcoming,
//   '/like': Like,
};

export default routes;
