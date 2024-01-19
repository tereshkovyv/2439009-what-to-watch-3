import CommonPage from '../common-page/common-page.tsx';
import MainScreenFilmCard from './main-screen-film-card/main-screen-film-card.tsx';
import FilmsAndGenresList from './films-and-genres-list/films-and-genres-list.tsx';

export default function MainScreen(){
  return(
    <>
      <MainScreenFilmCard/>
      <CommonPage>
        <FilmsAndGenresList/>
      </CommonPage>
    </>
  );
}
