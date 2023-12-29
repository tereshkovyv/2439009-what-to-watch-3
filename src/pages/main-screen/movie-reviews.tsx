import {useEffect} from 'react';
import {store} from '../../store';
import {fetchCommentsAction} from '../../store/api-actions.tsx';
import {useAppSelector} from '../../hooks';
import Spinner from '../../components/spinner/spinner.tsx';
import Comment from './comment.tsx';

export default function MovieReviews(){
  const filmId = useAppSelector((state) => state.film?.id);
  useEffect(() => {
    if (filmId !== undefined){
      store.dispatch(fetchCommentsAction(filmId));
    }
  }, []);
  const isCommentsLoading = useAppSelector((state) => state.isCommentsLoading);
  const comments = useAppSelector((state) => state.comments);
  if(isCommentsLoading){
    return <Spinner/>;
  }
  return(
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment) => (
          <Comment
            key={comment.comment}
            date={`${(new Date(comment.date)).toLocaleDateString('ru-RU',{month : 'long', day: 'numeric', year: 'numeric'})}`}
            user={comment.user}
            comment={comment.comment}
            rating={comment.rating}
          />))}
      </div>
    </div>);
}
