import CatalogGenresList from '../catalog-genres-list/catalog-genres-list.tsx';
import FilmsList from '../../../components/films-list/films-list.tsx';
import {FilmShort} from '../../../types.ts';
import {useEffect, useState} from 'react';
import {store} from '../../../store';
import {fetchFilmsAction} from '../../../store/api-actions/films.ts';
import {useAppSelector} from '../../../hooks';
import {getFilms} from '../../../store/reducers/films/selectors.ts';
import AsyncComponent from '../../../components/async-component/async-component.tsx';
import {ALL_GENRES_TITLE} from './consts.tsx';
import {FilmsData} from '../../../store/reducers/films/types.tsx';

function getGenresList(films : FilmShort[]){
  const set = new Set<string>();
  set.add(ALL_GENRES_TITLE);
  for (const film of films){
    set.add(film.genre);
  }
  return Array.from(set);
}

function getFilmsList(genre : string, sourceFilms: FilmsData){
  if (genre === ALL_GENRES_TITLE){
    return sourceFilms.films;
  } else {
    return sourceFilms.films.filter((item) => item.genre === genre);
  }
}

export default function FilmsAndGenresList(){
  useEffect(() => {
    store.dispatch(fetchFilmsAction());
  }, []);
  const sourceFilms = useAppSelector(getFilms);
  const genres = getGenresList(sourceFilms.films);
  const [films, setFilms] = useState(sourceFilms.films);

  function handleGenreChange(genre : string){
    if (genre === ALL_GENRES_TITLE){
      setFilms(sourceFilms.films);
    } else {
      setFilms(sourceFilms.films.filter((item) => item.genre === genre));
    }
  }
  useEffect(() => {
    setFilms(getFilmsList(ALL_GENRES_TITLE, sourceFilms));
  }, [sourceFilms]);

  return(
    <AsyncComponent isLoading={sourceFilms.isFilmsLoading}>
      <>
        <CatalogGenresList items={genres} onChange={(newGenre) => handleGenreChange(newGenre)}/>
        <FilmsList films={films}/>
      </>
    </AsyncComponent>
  );
}
