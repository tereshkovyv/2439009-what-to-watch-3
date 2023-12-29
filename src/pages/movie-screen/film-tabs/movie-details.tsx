import {useAppSelector} from '../../../hooks';
import {getFilm} from '../../../store/reducers/films/selectors.ts';

export default function MovieDetails(){
  const filmData = useAppSelector(getFilm);
  if (filmData === null) {
    return <h5>Ошибка загрузки данных</h5>;
  }
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{filmData.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {filmData.starring.map((name) => <>{name}<br/></>)}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{Math.floor(Number(filmData.runTime) / 60)}h {Number(filmData.runTime) % 60}m</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{filmData.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{filmData.released}</span>
        </p>
      </div>
    </div>
  );
}
