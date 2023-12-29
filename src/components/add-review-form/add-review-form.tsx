import React, {FormEvent, useState} from 'react';
import {Star} from './star.tsx';
import {store} from '../../store';
import {AppCommentDto} from '../../types.ts';
import {sendCommentAction} from '../../store/api-actions/comments.ts';

export type AddReviewFormProps = {
  filmId : string;
}

export function AddReviewForm({filmId} : AddReviewFormProps) {
  const [reviewData, setReviewData] = useState({rating : 0, text : ''});
  const [isAbleToSend, setIsAbleToSend] = useState(false);
  function onSubmit(evt: FormEvent<HTMLFormElement>){
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
  function validateForm(){
    setIsAbleToSend(reviewData.rating !== 0 && reviewData.text.length >= 50 && reviewData.text.length <= 400);
  }
  function ratingOnChange(i : number){
    setReviewData({...reviewData, rating: 10 - i});
    validateForm();
  }
  function textareaOnChange(event : React.ChangeEvent<HTMLTextAreaElement>){
    setReviewData({...reviewData, text: event.target.value});
    validateForm();
  }
  return (
    <div className="add-review">
      <form onSubmit={onSubmit} className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {Array.from(Array(10).keys()).map((i) => (
              <Star value={10 - i} key={10 - i} onClick={() => ratingOnChange(i)} />
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text"
            placeholder="Review text"
            onChange={(event) => textareaOnChange(event)}
          >
          </textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={!isAbleToSend}>Post</button>
          </div>

        </div>
      </form>
    </div>);
}
