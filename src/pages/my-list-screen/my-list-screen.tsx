import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';
import {useAppSelector} from '../../hooks';
import {useEffect} from 'react';
import {store} from '../../store';
import {fetchFavoriteAction} from '../../store/api-actions/favorite.ts';
import {getFavoriteFilmsData} from '../../store/reducers/favorite/selectors.ts';

export default function MyListScreen(){
  useEffect(() => {
    store.dispatch(fetchFavoriteAction());
  }, []);
  const films = useAppSelector(getFavoriteFilmsData);
  return(
    <div className="user-page">
      <Header/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={films.favoriteFilms}/>
      </section>
      <Footer/>
    </div>
  );
}
