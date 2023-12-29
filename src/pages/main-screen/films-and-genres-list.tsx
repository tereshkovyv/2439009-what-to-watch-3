import CatalogGenresList from './catalog-genres-list.tsx';
import FilmsList from '../../components/films-list/films-list.tsx';
import {FilmShort} from '../../types.ts';
import {useEffect, useState} from 'react';
import {store} from '../../store';
import {fetchFilmsAction} from '../../store/api-actions/films.ts';
import {useAppSelector} from '../../hooks';
import {getFilms, getIsFilmsLoading} from '../../store/reducers/films/selectors.ts';
import AsyncComponent from '../../components/async-component/async-component.tsx';

function GetGenresList(films : FilmShort[]){
  const set = new Set<string>();
  set.add('All genres');
  for (const film of films){
    set.add(film.genre);
  }
  return Array.from(set);
}

export default function FilmsAndGenresList(){
  useEffect(() => {
    store.dispatch(fetchFilmsAction());
  }, []);
  const isFilmsLoading = useAppSelector(getIsFilmsLoading);
  const sourceFilms = useAppSelector(getFilms);
  const genres = GetGenresList(sourceFilms);
  const [films, setFilms] = useState(sourceFilms);

  function onChange(genre : string){
    if (genre === 'All genres'){
      setFilms(sourceFilms);
    } else {
      setFilms(sourceFilms.filter((item) => item.genre === genre));
    }
  }
  return(
    <AsyncComponent isLoading={isFilmsLoading}>
      <>
        <CatalogGenresList items={genres} onChange={(newGenre) => onChange(newGenre)}/>
        <FilmsList films={films}/>
      </>
    </AsyncComponent>
  );
}
