import {useAppSelector} from '../../../hooks';
import Spinner from '../../../components/async-component/spinner.tsx';
import Comment from './comment.tsx';
import {getComments, getIsCommentsDownloading} from '../../../store/reducers/comments/selectors.ts';

export default function MovieReviews(){
  const isCommentsLoading = useAppSelector(getIsCommentsDownloading);
  const comments = useAppSelector(getComments);
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
