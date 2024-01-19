import {AddReviewForm} from '../../components/add-review-form/add-review-form.tsx';
import {useParams} from 'react-router-dom';
import AddReviewFilmCard from './add-review-film-card/add-review-film-card.tsx';
import NotFoundPage from '../not-found-page/not-found-page.tsx';


export default function AddReviewScreen(){
  const {id} = useParams();
  if (id === undefined){
    return <NotFoundPage/>;
  }
  return(
    <section className="film-card film-card--full">
      <AddReviewFilmCard id={id}/>
      <AddReviewForm filmId={id}/>
    </section>
  );
}
