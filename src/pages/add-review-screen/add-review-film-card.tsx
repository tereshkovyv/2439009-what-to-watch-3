import Header from '../../components/header/header.tsx';
import {useEffect} from 'react';
import {store} from '../../store';
import {fetchFilmAction} from '../../store/api-actions/films.ts';
import {useAppSelector} from '../../hooks';
import {getFilm, getIsFilmLoading} from '../../store/reducers/films/selectors.ts';
import AsyncComponent from '../../components/async-component/async-component.tsx';

export type AddReviewFilmCardProps = {
  id : string;
}

export default function AddReviewFilmCard({id} : AddReviewFilmCardProps){
  useEffect(() => {
    store.dispatch(fetchFilmAction(id));
  }, []);
  const isFilmLoading = useAppSelector(getIsFilmLoading);
  const film = useAppSelector(getFilm);
  return (
    <AsyncComponent isLoading={isFilmLoading}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={film?.name} width="218"
            height="327"
          />
        </div>
      </div>
    </AsyncComponent>
  );
}
