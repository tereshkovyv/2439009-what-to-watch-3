import FilmsList from '../../components/films-list/films-list';
import {CatalogGenresItem, CatalogGenresItemProps} from './catalog-genres-item.tsx';
import {filmData} from '../../mocks/films.ts';
import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';
import FilmCard from './film-card.tsx';


type MainScreenProps = {
  menuItems : CatalogGenresItemProps[];
  films : filmData[];
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

          <ul className="catalog__genres-list">
            {props.menuItems.map((itemProps) => (
              <CatalogGenresItem
                key = {itemProps.value}
                isActive={itemProps.isActive}
                href={itemProps.href}
                value={itemProps.value}
              />))}
          </ul>

          <FilmsList films={props.films}/>
        </section>

        <Footer/>
      </div>
    </>
  );
}
