import Header from '../../../components/header/header.tsx';
import {useAppSelector} from '../../../hooks';
import {getPromoFilm} from '../../../store/reducers/films/selectors.ts';
import {useEffect} from 'react';
import {store} from '../../../store';
import {fetchPromoFilmAction} from '../../../store/api-actions/films.ts';
import AsyncComponent from '../../../components/async-component/async-component.tsx';
import ButtonsPanel from '../../../components/buttons-panel/buttons-panel.tsx';


export default function MainScreenFilmCard(){
  useEffect(() => {
    store.dispatch(fetchPromoFilmAction());
  }, []);
  const filmData = useAppSelector(getPromoFilm);
  return(
    <AsyncComponent isLoading={filmData.isPromoFilmLoading}>
      {!filmData.promoFilm ? <h1>Загрузка...</h1> :
        <section className="film-card">
          <div className="film-card__bg">
            <img src={filmData.promoFilm.backgroundImage} alt={filmData.promoFilm.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header/>
          <div className="film-card__wrap">
            <div className="film-card__info">
              <div className="film-card__poster">
                <img src={filmData.promoFilm.posterImage} alt={filmData.promoFilm.name} width="218"
                  height="327"
                />
              </div>

              <div className="film-card__desc">
                <h2 className="film-card__title">{filmData.promoFilm.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{filmData.promoFilm.genre}</span>
                  <span className="film-card__year">{filmData.promoFilm.released}</span>
                </p>

                <ButtonsPanel filmId={filmData.promoFilm.id} isFavorite={Boolean(filmData.promoFilm.isFavorite)}/>
              </div>
            </div>
          </div>
        </section>}
    </AsyncComponent>
  );
}
