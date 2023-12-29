import Header from '../../components/header/header.tsx';
import FilmTabs from './film-tabs/film-tabs.tsx';
import {useAppSelector} from '../../hooks';
import {getFilm, getIsFilmLoading} from '../../store/reducers/films/selectors.ts';
import {useEffect} from 'react';
import {store} from '../../store';
import {fetchFilmAction} from '../../store/api-actions/films.ts';
import Spinner from '../../components/async-component/spinner.tsx';
import ButtonsPanel from '../../components/buttons-panel/buttons-panel.tsx';
import {fetchCommentsAction} from '../../store/api-actions/comments.ts';

export type MovieScreenFilmCardProps = {
  id : string;
}

export default function MovieScreenFilmCard({id} : MovieScreenFilmCardProps){
  const film = useAppSelector(getFilm);
  const isFilmLoading = useAppSelector(getIsFilmLoading);
  useEffect(() => {
    store.dispatch(fetchFilmAction(id));
    store.dispatch(fetchCommentsAction(id));
  }, []);

  if(isFilmLoading){
    return (<Spinner/>);
  }
  if (film === null) {
    return <h5>Ошибка загрузки данных</h5>;
  }
  return(
    <section className="film-card">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{film.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.released}</span>
            </p>
            <ButtonsPanel filmId={film.id} isFavorite={film.isFavorite}/>
          </div>
        </div>
      </div>
      <div className="film-card__wrap film-card__translate-top">
        <div className="film-card__info">
          <div className="film-card__poster film-card__poster--big">
            <img src={film?.posterImage} alt={film?.name} width="218"
              height="327"
            />
          </div>
          <FilmTabs />
        </div>
      </div>
    </section>
  );
}
