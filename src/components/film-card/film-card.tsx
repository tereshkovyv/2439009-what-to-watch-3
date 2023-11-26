<<<<<<< Updated upstream
type FilmCardProps = {
=======
import {useRef, useState} from 'react';
import VideoPlayer from '../video-player/video-player.tsx';
import FilmPoster from '../film-poster/film-poster.tsx';
import {TimeoutId} from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';

type FilmCardProps = {
  videoSrc : string;
  imageSrc : string;
  id : string;
  onMouseOver : (id : string) => void;
>>>>>>> Stashed changes
  name : string;
  link : string;
}

export default function FilmCard(props : FilmCardProps){
  const [isActive, setIsActive] = useState(false);
  const [isReadyToPreview, setIsReadyToPreview] = useState(false);
  const timer = useRef<TimeoutId | null>(null);
  function onMouseEnterHandler(){
    if (timer.current !== null){
      clearTimeout(timer.current);
      console.log(`cleared ${props.id}`);
    }
    setIsActive(true);
    timer.current = setTimeout(() => {
      setIsReadyToPreview(true);
    }, 1000);
    props.onMouseOver(props.id);
  }
  function onMouseLeaveHandler(){
    setIsActive(false);
    setIsReadyToPreview(false);
  }
  return(
<<<<<<< Updated upstream
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.imgSrc}
          alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={props.link}>{props.name}</a>
      </h3>
=======
    <article onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className="small-film-card catalog__films-card">
      {isReadyToPreview && isActive
        ? <VideoPlayer videoSrc={props.videoSrc} posterSrc={props.imageSrc} />
        : <FilmPoster id={props.id} name={props.name} imgSrc={props.imageSrc} link={props.link}/>}
>>>>>>> Stashed changes
    </article>
  );
}
