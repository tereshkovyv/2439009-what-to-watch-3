import {FormEvent, useState} from 'react';
import {Star} from './star.tsx';
import {store} from '../../store';
import {sendCommentAction} from '../../store/api-actions.tsx';
import {FilmCommentBeingSent} from '../../types.ts';
import {useAppSelector} from '../../hooks';

export function AddReviewForm() {
  const [reviewData, setReviewData] = useState({rating : 0, text : ''});
  const filmId = useAppSelector((state) => state.film?.id);
  function onSubmit(evt: FormEvent<HTMLFormElement>){
    evt.preventDefault();
    if (filmId){
      const dataToBeingSent: FilmCommentBeingSent = {
        id : filmId,
        comment : reviewData.text,
        rating : reviewData.rating
      };
      store.dispatch(sendCommentAction(dataToBeingSent));
    }
  }
  return (
    <form onSubmit={onSubmit} className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {Array.from(Array(10).keys()).map((i) => (
            <Star value={10 - i} key={10 - i} onClick={() => setReviewData({...reviewData, rating: 10 - i})} />
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text"
          placeholder="Review text"
          onChange={(event) => setReviewData({...reviewData, text: event.target.value})}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>);
}
