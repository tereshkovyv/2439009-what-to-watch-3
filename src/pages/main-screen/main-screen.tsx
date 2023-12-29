import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';
import FilmCard from './film-card.tsx';
import CatalogGenresList from './catalog-genres-list.tsx';


type MainScreenProps = {
  menuItems : string[];
}

export default function MainScreen(props : MainScreenProps){

  return(
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <Header/>
        <FilmCard/>
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
