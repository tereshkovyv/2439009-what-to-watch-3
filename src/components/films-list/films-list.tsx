import {filmData} from '../../mocks/films';
import FilmCard from './film-card/film-card';
import {useState} from 'react';
import {useAppSelector} from '../../hooks';
export default function FilmsList() {
  const films = useAppSelector((state) => state.films);
  const [, setActiveFilmId] = useState('1');
  return (
    <>
      <div className="catalog__films-list">
        {films.map((film : filmData) => (
          <FilmCard
            key={film.id}
            name={film.name}
            imageSrc={film.imgSrc}
            link={film.link}
            id={film.id}
            onMouseOver={(id : string) => setActiveFilmId(id)}
            videoSrc={film.videoSrc}
          />))}
      </div>
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </>
  );
}
