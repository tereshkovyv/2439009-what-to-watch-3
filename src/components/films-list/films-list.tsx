import FilmCard from './film-card/film-card';
import {useAppSelector} from '../../hooks';
import {useEffect, useState} from 'react';
import ShowMoreButton from './show-more-button/show-more-button.tsx';
import Spinner from '../async-component/spinner/spinner.tsx';
import {FilmShort} from '../../types.ts';
import {getFilms} from '../../store/reducers/films/selectors.ts';
import {MOVIES_PER_PAGE_COUNT} from './consts.tsx';

export type FilmsListProps = {
  films : FilmShort[];
}

export default function FilmsList({films} : FilmsListProps) {
  const isFilmsLoading = useAppSelector(getFilms).isFilmsLoading;
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
        {films.slice(0, pagesCount * MOVIES_PER_PAGE_COUNT).map((film : FilmShort) => (
          <FilmCard
            key={film.id}
            id={film.id}
            name={film.name}
            imageSrc={film.previewImage}
            link={film.previewVideoLink}
            videoSrc={film.previewVideoLink}
          />))}
      </div>
      {pagesCount * MOVIES_PER_PAGE_COUNT < films.length &&
          <ShowMoreButton onClick={() => setPagesCount(pagesCount + 1)} />}
    </>
  );
}
