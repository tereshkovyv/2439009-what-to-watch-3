import React, {FormEvent, useEffect, useState} from 'react';
import {Star} from './star/star.tsx';
import {store} from '../../store';
import {AppCommentDto} from '../../types.ts';
import {sendCommentAction} from '../../store/api-actions/comments.ts';
import {MAXIMAL_REVIEW_TEXT_LENGTH, MINIMAL_REVIEW_TEXT_LENGTH, STARS_COUNT} from './consts.tsx';

export type AddReviewFormProps = {
  filmId : string;
}

export function AddReviewForm({filmId} : AddReviewFormProps) {
  const [reviewData, setReviewData] = useState({rating : 0, text : ''});
  const [isAbleToSend, setIsAbleToSend] = useState(false);
  function handleFormSubmission(evt: FormEvent<HTMLFormElement>){
    evt.preventDefault();
    if (filmId){
      const dataToBeingSent: AppCommentDto = {
        id : filmId,
        comment : reviewData.text,
        rating : reviewData.rating
      };
      store.dispatch(sendCommentAction(dataToBeingSent));
    }
  }
  function handleRatingChange(i : number){
    setReviewData({...reviewData, rating: STARS_COUNT - i});
  }

  function handleTextChange(event : React.ChangeEvent<HTMLTextAreaElement>) {
    setReviewData({...reviewData, text: event.target.value});
  }

  useEffect(() => {
    setIsAbleToSend(reviewData.rating !== 0 && reviewData.text.length >= MINIMAL_REVIEW_TEXT_LENGTH && reviewData.text.length <= MAXIMAL_REVIEW_TEXT_LENGTH);
  }, [reviewData,]);
  return (
    <div className="add-review">
      <form onSubmit={handleFormSubmission} className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Array.from(Array(STARS_COUNT).keys()).map((i) => (
              <Star value={STARS_COUNT - i} key={STARS_COUNT - i} onClick={() => handleRatingChange(i)} />
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text"
            placeholder="Review text"
            onChange={(event) => handleTextChange(event)}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!isAbleToSend}>Post</button>
          </div>

        </div>
      </form>
    </div>);
}
