import MainScreen from '../../pages/main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import MovieScreen from '../../pages/movie-screen/movie-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import {PrivateRoute, AuthorizationStatus} from '../private-route/private-route';
import {filmData, filmsMock} from "../../mocks/films";
import {CatalogGenresItemProps} from "../../pages/main-screen/catalog-genres-item.tsx";
import {playerMock} from "../../mocks/playerMock.tsx";

type appProps = {
  name : string;
  genre : string;
  films : filmData[];
  releaseDate : string;
  menuItems : CatalogGenresItemProps[];
}

export default function App({name, genre, films, releaseDate, menuItems} : appProps){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainScreen name={name} genre={genre} releaseDate={releaseDate} films={films} menuItems={menuItems}/>} />
        <Route path='/login' element={<SignInScreen/>} />
        <Route path='/myList' element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><MyListScreen films={filmsMock}/></PrivateRoute>
        }
        />
        <Route path='/films/:id' element={<MovieScreen/>} />
        <Route path='/films/:id/addReview' element={<AddReviewScreen/>} />
        <Route path='/player/:id' element={<PlayerScreen src={playerMock.src} posterSrc={playerMock.posterSrc}/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  );
}
