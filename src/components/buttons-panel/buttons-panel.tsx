import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {useAppSelector} from '../../hooks';
import {useEffect, useState} from 'react';
import {fetchFavoriteAction, sendNewStatusAction} from '../../store/api-actions/favorite.ts';
import {store} from '../../store';
import AsyncComponent from '../async-component/async-component.tsx';
import {getUserData} from '../../store/reducers/user/selectors.ts';
import {getFavoriteFilmsData} from '../../store/reducers/favorite/selectors.ts';

export type ButtonsPanelProps = {
  filmId : string;
  isFavorite : boolean;
}

export default function ButtonsPanel(props : ButtonsPanelProps){
  const isUserAuthenticated = useAppSelector(getUserData).authorizationStatus === AuthorizationStatus.Auth;
  const favoriteFilmsData = useAppSelector(getFavoriteFilmsData).favoriteFilms;
  const isFavoriteFilmsLoading = useAppSelector(getFavoriteFilmsData).isFavoriteFilmsLoading;
  const isChangeStatusLoading = useAppSelector(getFavoriteFilmsData).isChangeStatusLoading;
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const [favoriteFilmsCount, setFavoriteFilmsCount] = useState(0);
  function handleFavoriteClick(){
    store.dispatch(sendNewStatusAction({
      id : props.filmId,
      status : isFavorite ? '0' : '1'
    }));
    setIsFavorite(!isFavorite);
    setFavoriteFilmsCount(favoriteFilmsCount + (isFavorite ? -1 : 1));
  }

  useEffect(() => {
    setFavoriteFilmsCount(favoriteFilmsData.length);
  }, [favoriteFilmsData, isFavoriteFilmsLoading]);

  useEffect(() => {
    store.dispatch(fetchFavoriteAction());
    setFavoriteFilmsCount(favoriteFilmsData.length);
  }, [favoriteFilmsData.length]);

  return(
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(`${AppRoute.Player}/${props.filmId}`)}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      {isUserAuthenticated &&
        <button className="btn btn--list film-card__button" type="button" onClick={handleFavoriteClick}>
          <svg viewBox="0 0 19 20" width="19" height="20">
            <AsyncComponent isLoading={isChangeStatusLoading}>
              {isFavorite ? <use xlinkHref="#in-list"></use> : <use xlinkHref="#add"></use>}
            </AsyncComponent>
          </svg>
          <span>My list</span>
          <AsyncComponent isLoading={isFavoriteFilmsLoading}>
            <div>
              <span className="film-card__count">{favoriteFilmsCount}</span>
            </div>
          </AsyncComponent>
        </button>}
      {isUserAuthenticated && <Link to={`/films/${props.filmId}/${AppRoute.AddReview}`} className="btn film-card__button">Add review</Link>}
    </div>
  );
}
