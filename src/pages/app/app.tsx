import MainScreen from '../main-screen/main-screen.tsx';
import {Route, Routes} from 'react-router-dom';
import SignInScreen from '../sign-in-screen/sign-in-screen.tsx';
import MyListScreen from '../my-list-screen/my-list-screen.tsx';
import MovieScreen from '../movie-screen/movie-screen.tsx';
import PlayerScreen from '../player-screen/player-screen.tsx';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import {PrivateRoute} from '../../components/private-route/private-route.tsx';
import AddReviewScreen from '../add-review-screen/add-review-screen.tsx';
import HistoryRoute from '../../components/history-route/history-route.tsx';
import browserHistory from '../../browser-history.ts';
import {AppRoute} from '../../consts.ts';

export default function App(){
  return (
    <HistoryRoute history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<MainScreen />} />
        <Route path={AppRoute.Login} element={<SignInScreen/>} />
        <Route path={AppRoute.MyList} element={
          <PrivateRoute><MyListScreen /></PrivateRoute>
        }
        />
        <Route path={`/${AppRoute.Films}/:id/`} element={<MovieScreen /> }/>
        <Route path={`/${AppRoute.Films}/:id/${AppRoute.AddReview}`} element={
          <PrivateRoute><AddReviewScreen/></PrivateRoute>
        }
        />
        <Route path={`/${AppRoute.Player}/:id`} element={<PlayerScreen />} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </HistoryRoute>
  );
}
