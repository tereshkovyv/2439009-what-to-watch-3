export default function MovieOverview(){
  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">8,9</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">240 ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge
          {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.
        </p>

        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p>Gustave prides himself on providing first-class service to the hotel's guests, including satisfying
          {/* eslint-disable-next-line react/no-unescaped-entities */}
                    the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies
                    mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her
                    murder.
        </p>

        <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>

        <p className="film-card__starring">
          <strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe
                        and other
          </strong>
        </p>
      </div>
    </>
  );
}
