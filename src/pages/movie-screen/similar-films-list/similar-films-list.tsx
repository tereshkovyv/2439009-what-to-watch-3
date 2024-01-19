import FilmsList from '../../../components/films-list/films-list.tsx';
import Footer from '../../../components/footer/footer.tsx';
import {useEffect} from 'react';
import {useAppSelector} from '../../../hooks';
import {getSimilarFilms} from '../../../store/reducers/films/selectors.ts';
import {store} from '../../../store';
import {fetchSimilarFilmsAction} from '../../../store/api-actions/films.ts';
import AsyncComponent from '../../../components/async-component/async-component.tsx';

export type SimilarFilmsListProps = {
  id : string;
}

export default function SimilarFilmsList({id} : SimilarFilmsListProps){
  const similarFilms = useAppSelector(getSimilarFilms);
  useEffect(() => {
    store.dispatch(fetchSimilarFilmsAction(id));
  }, [id]);
  return (
    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <AsyncComponent isLoading={similarFilms.isSimilarFilmsLoading}>
          <FilmsList films={similarFilms.similarFilms}/>
        </AsyncComponent>
      </section>
      <Footer/>
    </div>
  );
}
