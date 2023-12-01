import FilmCard from './film-card/film-card';
import {useAppSelector} from '../../hooks';
import {memo, useEffect, useState} from 'react';
import ShowMoreButton from './show-more-button.tsx';
import Spinner from '../async-component/spinner.tsx';
import {FilmShort} from '../../types.ts';
import {getIsFilmsLoading} from '../../store/reducers/films/selectors.ts';

export type FilmsListProps = {
  films : FilmShort[];
}

function FilmsList({films} : FilmsListProps) {
  const isFilmsLoading = useAppSelector(getIsFilmsLoading);
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

export default memo(FilmsList);
