export type VideoPlayerProps = {
  videoSrc : string;
  posterSrc : string;
}

export default function VideoPlayer(props : VideoPlayerProps){
  return(
    <div className="small-film-card__image">
      <video src={props.videoSrc} poster={props.posterSrc} controls={false} muted autoPlay width="280" height="175"/>
    </div>
  );
}
