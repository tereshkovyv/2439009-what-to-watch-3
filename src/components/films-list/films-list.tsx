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
          key={film.name}
          name={film.name}
          imgSrc={film.imgSrc}
          link={film.link}
          id={film.id}
          onMouseEnter={(id : string) => setActiveFilmId(id)}
        />))}
    </div>
  );
}
