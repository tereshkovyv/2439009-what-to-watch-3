import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';


export default function MyListScreen(){
  return(
    <div className="user-page">
      <Header/>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList />
      </section>
      <Footer/>
    </div>
  );
}
