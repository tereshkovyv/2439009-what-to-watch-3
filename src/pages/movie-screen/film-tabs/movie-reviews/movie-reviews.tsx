import {useAppSelector} from '../../../../hooks';
import Comment from '../comment/comment.tsx';
import {getCommentsData} from '../../../../store/reducers/comments/selectors.ts';
import AsyncComponent from '../../../../components/async-component/async-component.tsx';

export default function MovieReviews(){
  const comments = useAppSelector(getCommentsData);
  return(
    <AsyncComponent isLoading={comments.isCommentsDownLoading}>
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
          {comments.comments.map((comment) => (
            <Comment
              key={comment.comment}
              date={`${(new Date(comment.date)).toLocaleDateString('ru-RU',{month : 'long', day: 'numeric', year: 'numeric'})}`}
              user={comment.user}
              comment={comment.comment}
              rating={comment.rating}
            />))}
        </div>
      </div>
    </AsyncComponent>);
}
