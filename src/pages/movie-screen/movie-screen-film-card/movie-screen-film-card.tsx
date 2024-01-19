import Header from '../../../components/header/header.tsx';
import FilmTabs from '../film-tabs/film-tabs.tsx';
import {useAppSelector} from '../../../hooks';
import {getFilm} from '../../../store/reducers/films/selectors.ts';
import {useEffect} from 'react';
import {store} from '../../../store';
import {fetchFilmAction} from '../../../store/api-actions/films.ts';
import ButtonsPanel from '../../../components/buttons-panel/buttons-panel.tsx';
import {fetchCommentsAction} from '../../../store/api-actions/comments.ts';
import AsyncComponent from '../../../components/async-component/async-component.tsx';

export type MovieScreenFilmCardProps = {
  id : string;
}

export default function MovieScreenFilmCard({id} : MovieScreenFilmCardProps){
  const film = useAppSelector(getFilm);
  useEffect(() => {
    store.dispatch(fetchFilmAction(id));
    store.dispatch(fetchCommentsAction(id));
  }, [id]);

  if (!film.film) {
    return <h5>Ошибка загрузки данных</h5>;
  }
  return(
    <AsyncComponent isLoading={film.isFilmLoading}>
      <section className="film-card">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.film.backgroundImage} alt={film.film.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header/>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.film.genre}</span>
                <span className="film-card__year">{film.film.released}</span>
              </p>
              <ButtonsPanel filmId={film.film.id} isFavorite={film.film.isFavorite}/>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.film.posterImage} alt={film.film.name} width="218"
                height="327"
              />
            </div>
            <FilmTabs />
          </div>
        </div>
      </section>
    </AsyncComponent>
  );
}
