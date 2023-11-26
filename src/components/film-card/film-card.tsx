type FilmCardProps = {
  name : string;
  imgSrc : string;
  link : string;
}

export default function FilmCard(props : FilmCardProps){
  return(
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.imgSrc}
          alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={props.link}>{props.name}</a>
      </h3>
    </article>
  );
}
