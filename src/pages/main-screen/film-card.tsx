import FilmButtonsMainScreen from "./film-buttons-main-screen.tsx";

export default function FilmCard(){
  return(
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218"
            height="327"
          />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">props.name</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">props.genre</span>
            <span className="film-card__year">props.releaseDate</span>
          </p>

          <FilmButtonsMainScreen/>
        </div>
      </div>
    </div>
  );
}
