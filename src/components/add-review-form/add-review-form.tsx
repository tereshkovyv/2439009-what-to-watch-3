import {useState} from 'react';
import {Star} from './star.tsx';

export function AddReviewForm() {
  const [reviewData, setReviewData] = useState({rating : 0, text : ''});
  return (
    <form action="#" className="add-review__form">
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
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form>);
}
