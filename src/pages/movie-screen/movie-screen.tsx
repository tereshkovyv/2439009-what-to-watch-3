import {useParams} from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import MovieScreenFilmCard from './movie-screen-film-card/movie-screen-film-card.tsx';
import SimilarFilmsList from './similar-films-list/similar-films-list.tsx';

export default function MovieScreen(){
  const {id} = useParams();
  if (id === undefined){
    return <NotFoundPage/>;
  }
  return (
    <>
      <MovieScreenFilmCard id={id}/>
      <SimilarFilmsList id = {id}/>
    </>
  );
}
