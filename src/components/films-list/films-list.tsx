import {filmData} from '../../mocks/films';
import FilmCard from './film-card/film-card';
import {useAppSelector} from '../../hooks';
import {useEffect, useState} from 'react';
import ShowMoreButton from './show-more-button.tsx';
export default function FilmsList() {
  const films = useAppSelector((state) => state.films);
  const [pagesCount, setPagesCount] = useState(1);
  useEffect(() => () =>{
    setPagesCount(1);
  }, [films]);
  return (
    <>
      <div className="catalog__films-list">
        {films.slice(0, pagesCount * 8).map((film : filmData) => (
          <FilmCard
            key={film.id}
            name={film.name}
            imageSrc={film.imgSrc}
            link={film.link}
            videoSrc={film.videoSrc}
          />))}
      </div>
      {pagesCount * 8 < films.length &&
          <ShowMoreButton onClick={() => setPagesCount(pagesCount + 1)} />}
    </>
  );
}
