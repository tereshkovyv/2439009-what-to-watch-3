import FilmCardsButtons from './film-cards-buttons.tsx';

export type FilmCardMovieScreenProps = {
  name : string | undefined;
  genre : string | undefined;
  year : string | undefined;
}
export default function FilmCardMovieScreen(props : FilmCardMovieScreenProps){
  return(
    <div className="film-card__wrap">
      <div className="film-card__desc">
        <h2 className="film-card__title">{props.name}</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">{props.genre}</span>
          <span className="film-card__year">{props.year}</span>
        </p>

        <FilmCardsButtons/>
      </div>
    </div>
  );
}
