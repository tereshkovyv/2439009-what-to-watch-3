export type CommentProps = {
  date : string;
  user :string;
  comment : string;
  rating : string;
}

export default function Comment(props : CommentProps){
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p>{props.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{props.user}</cite>
          <time className="review__date" dateTime={props.date}>{props.date}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{props.rating}</div>
    </div>
  );
}
