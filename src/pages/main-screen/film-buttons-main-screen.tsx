import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {useAppSelector} from '../../hooks';

export default function FilmButtonsMainScreen(){
  const isUserAuthenticated = useAppSelector((state) => state.authorizationStatus === AuthorizationStatus.Auth);
  const navigare = useNavigate();
  return(
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button" onClick={() => navigare(AppRoute.Player)}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button" onClick={() => navigare(AppRoute.MyList)}>
        <svg viewBox="0 0 19 20" width="19" height="20">
          <use xlinkHref="#add"></use>
        </svg>
        <span>My list</span>
        <span className="film-card__count">9</span>
      </button>
      {isUserAuthenticated && <Link to={`/films/${5}/addReview`} className="btn film-card__button">Add review</Link>}
    </div>
  );
}
