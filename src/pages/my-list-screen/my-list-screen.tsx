import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';
import {useAppSelector} from '../../hooks';
import {getFavorite} from '../../store/reducers/favorite/selectors.ts';
import {useEffect} from 'react';
import {store} from '../../store';
import {fetchFavoriteAction} from '../../store/api-actions/favorite.ts';

export default function MyListScreen(){
  useEffect(() => {
    store.dispatch(fetchFavoriteAction());
  }, []);
  const films = useAppSelector(getFavorite);
  return(
    <div className="user-page">
      <Header/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films}/>
      </section>
      <Footer/>
    </div>
  );
}
