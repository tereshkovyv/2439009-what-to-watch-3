import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';
import FilmCard from './film-card.tsx';
import CatalogGenresList from './catalog-genres-list.tsx';
import {store} from '../../store';
import {fetchPromoFilmAction} from '../../store/api-actions.tsx';
import {useAppSelector} from '../../hooks';
import Spinner from '../../components/spinner/spinner.tsx';
import {useEffect} from 'react';

type MainScreenProps = {
  menuItems : string[];
}

export default function MainScreen(props : MainScreenProps){
  useEffect(() => {
    store.dispatch(fetchPromoFilmAction());
  }, []);
  const isFilmLoading = useAppSelector((state) => state.isFilmLoading);
  const filmData = useAppSelector((state) => state.film);
  if (isFilmLoading){
    return <Spinner/>;
  }
  return(
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={filmData?.backgroundImage} alt={filmData?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <FilmCard film={filmData}/>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogGenresList items={props.menuItems} />

          <FilmsList/>
        </section>

        <Footer/>
      </div>
    </>
  );
}
