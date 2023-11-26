import FilmCardsButtons from './film-cards-buttons.tsx';

export default function FilmCardMovieScreen(){
  return(
    <div className="film-card__wrap">
      <div className="film-card__desc">
        <h2 className="film-card__title">The Grand Budapest Hotel</h2>
        <p className="film-card__meta">
          <span className="film-card__genre">Drama</span>
          <span className="film-card__year">2014</span>
        </p>

        <FilmCardsButtons/>
      </div>
    </div>
  );
}
