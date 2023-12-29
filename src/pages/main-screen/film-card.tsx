import FilmButtonsMainScreen from './film-buttons-main-screen.tsx';
import {Film} from '../../types.ts';

export type FilmCardProps = {
  film : Film | null;
}
export default function FilmCard({film} : FilmCardProps){
  return(
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={film?.posterImage} alt={film?.name} width="218"
            height="327"
          />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{film?.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{film?.genre}</span>
            <span className="film-card__year">{film?.released}</span>
          </p>

          <FilmButtonsMainScreen/>
        </div>
      </div>
    </div>
  );
}
