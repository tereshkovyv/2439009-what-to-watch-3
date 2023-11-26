import FilmsList from '../../components/films-list/films-list';
import {filmData} from '../../mocks/films.ts';
import Footer from "../../components/footer/footer.tsx";
import Header from "../../components/header/header.tsx";
export type MyListScreenProps = {
  films : filmData[];
}

export default function MyListScreen(props : MyListScreenProps){
  return(
    <div className="user-page">
      <Header/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={props.films}/>
      </section>
      <Footer/>
    </div>
  );
}
