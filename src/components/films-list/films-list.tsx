import FilmCard from './film-card/film-card';
import {useAppSelector} from '../../hooks';
import {useEffect, useState} from 'react';
import ShowMoreButton from './show-more-button.tsx';
import Spinner from '../spinner/spinner.tsx';
import {FilmShort} from '../../types.ts';
export default function FilmsList() {
  const isFilmsLoading = useAppSelector((state) => state.isFilmsDataLoading);
  const films = useAppSelector((state) => state.films);
  const [pagesCount, setPagesCount] = useState(1);
  useEffect(() => () =>{
    setPagesCount(1);
  }, [films]);

  if (isFilmsLoading) {
    return <Spinner/>;
  }
  return (
    <>
      <div className="catalog__films-list">
        {films.slice(0, pagesCount * 8).map((film : FilmShort) => (
          <FilmCard
            key={film.id}
            id={film.id}
            name={film.name}
            imageSrc={film.previewImage}
            link={film.previewVideoLink}
            videoSrc={film.previewVideoLink}
          />))}
      </div>
      {pagesCount * 8 < films.length &&
          <ShowMoreButton onClick={() => setPagesCount(pagesCount + 1)} />}
    </>
  );
}
