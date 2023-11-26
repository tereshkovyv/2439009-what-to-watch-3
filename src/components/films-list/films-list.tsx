import {filmData} from '../../mocks/films';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type filmsListProps = {
  films : filmData[];
}

export default function FilmsList({films} : filmsListProps) {
  const [, setActiveFilmId] = useState('1');
  return (
    <div className="catalog__films-list">
      {films.map((film : filmData) => (
        <FilmCard
          key={film.id}
          name={film.name}
          imageSrc={film.imgSrc}
          link={film.link}
          id={film.id}
          onMouseOver={(id : string) => setActiveFilmId(id)}
          videoSrc="https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm"
        />))}
    </div>
  );
}
