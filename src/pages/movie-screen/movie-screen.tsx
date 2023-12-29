import {useState} from 'react';
import MovieDetails from './movie-details.tsx';
import MovieReviews from '../main-screen/movie-reviews.tsx';
import MovieOverview from '../main-screen/movie-overview.tsx';
import FilmTabs from './film-tabs.tsx';
import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';
import FilmCardMovieScreen from './film-card-movie-screen.tsx';
import FilmsList from '../../components/films-list/films-list.tsx';

export type MovieScreenProps = {
  children : React.ReactNode;
} ;


export default function MovieScreen(){
  const [currentPage, setCurrentPage] = useState('Overview');
  return (
    <>
      <section className="film-card">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header/>

          <FilmCardMovieScreen/>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
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

          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <FilmsList />
          </section>
        </section>

        <Footer/>
      </div>
    </>
  );
}
