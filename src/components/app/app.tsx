import MainScreen from '../../pages/main-screen/main-screen';
import {Route, Routes} from 'react-router-dom';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {PrivateRoute} from '../private-route/private-route';
import {playerMock} from '../../mocks/playerMock.ts';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen.tsx';
import HistoryRoute from '../history-route/history-route.tsx';
import browserHistory from '../../browser-history.ts';

type appProps = {
  menuItems : string[];
}

export default function App({menuItems} : appProps){
  return (
    <HistoryRoute history={browserHistory}>
      <Routes>
        <Route path='/' element={<MainScreen menuItems={menuItems}/>} />
        <Route path='/login' element={<SignInScreen/>} />
        <Route path='/myList' element={
          <PrivateRoute><MyListScreen /></PrivateRoute>
        }
        />
        <Route path='/films/:id/' element={<MovieScreen /> }/>
        <Route path='/films/:id/addReview' element={<AddReviewScreen/>} />
        <Route path='/player/:id' element={<PlayerScreen src={playerMock.src} posterSrc={playerMock.posterSrc}/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </HistoryRoute>
  );
}
