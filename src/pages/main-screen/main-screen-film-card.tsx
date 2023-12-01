import Header from '../../components/header/header.tsx';
import {useAppSelector} from '../../hooks';
import {getIsPromoFilmLoading, getPromoFilm} from '../../store/reducers/films/selectors.ts';
import {useEffect} from 'react';
import {store} from '../../store';
import {fetchPromoFilmAction} from '../../store/api-actions/films.ts';
import AsyncComponent from '../../components/async-component/async-component.tsx';
import ButtonsPanel from '../../components/buttons-panel/buttons-panel.tsx';


export default function MainScreenFilmCard(){
  useEffect(() => {
    store.dispatch(fetchPromoFilmAction());
  }, []);
  const filmData = useAppSelector(getPromoFilm);
  const isFilmLoading = useAppSelector(getIsPromoFilmLoading);

  if(filmData === null) {
    return <h5>Ошибка загрузки данных</h5>;
  }
  return(
    <AsyncComponent isLoading={isFilmLoading}>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={filmData.backgroundImage} alt={filmData.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={filmData.posterImage} alt={filmData.name} width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{filmData.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmData.genre}</span>
                <span className="film-card__year">{filmData.released}</span>
              </p>

              <ButtonsPanel filmId={filmData.id} isFavorite={Boolean(filmData.isFavorite)}/>
            </div>
          </div>
        </div>
      </section>
    </AsyncComponent>
  );
}
