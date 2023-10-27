import MainScreen from '../../pages/main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {PrivateRoute, AuthorizationStatus} from '../private-route/private-route';

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainScreen name={'The Grand Budapest Hotel poster'} genre={'Drama'} releaseDate={'2014'}/>} />
        <Route path='/login' element={<SignInScreen/>} />
        <Route path='/myList' element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}><MyListScreen/></PrivateRoute>
        }
        />
        <Route path='/films/:id' element={<MovieScreen/>} />
        <Route path='/films/:id/addReview' element={<AddReviewScreen/>} />
        <Route path='/player/:id' element={<PlayerScreen/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
