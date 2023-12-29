import {useEffect, useState} from 'react';
import MovieDetails from './movie-details.tsx';
import MovieReviews from '../main-screen/movie-reviews.tsx';
import MovieOverview from '../main-screen/movie-overview.tsx';
import FilmTabs from './film-tabs.tsx';
import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';
import FilmCardMovieScreen from './film-card-movie-screen.tsx';
import FilmsList from '../../components/films-list/films-list.tsx';
import {store} from '../../store';
import {fetchFilmAction} from '../../store/api-actions.tsx';
import {useAppSelector} from '../../hooks';
import Spinner from '../../components/spinner/spinner.tsx';
import {useLocation} from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page.tsx';

export default function MovieScreen(){
  const path = useLocation().pathname.split('/');
  const id = path[path.length - 1];
  const filmData = useAppSelector((state) => state.film);
  const isFilmLoading = useAppSelector((state) => state.isFilmLoading);
  const [currentPage, setCurrentPage] = useState('Overview');
  useEffect(() => {
    store.dispatch(fetchFilmAction(id));
  }, []);
  if(isFilmLoading){
    return (<Spinner/>);
  }
  if (filmData === null) {
    return <NotFoundPage/>;
  }
  return (
    <>
      <section className="film-card">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmData?.backgroundImage} alt={filmData?.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <FilmCardMovieScreen name={filmData?.name} genre={filmData?.genre} year={filmData?.released}/>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmData?.posterImage} alt={filmData?.name} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">

              <FilmTabs onChange={(pageName) => setCurrentPage(pageName)}/>
              {{
                'Overview' : <MovieOverview/>,
                'Details' : <MovieDetails/>,
                'Reviews' : <MovieReviews/>
              }[currentPage]}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList />
        </section>
        <Footer/>
      </div>
    </>
  );
}
