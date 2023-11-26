import {useRef, useState} from 'react';
import VideoPlayer from './video-player.tsx';
import FilmPoster from './film-poster.tsx';
import {TimeoutId} from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';

type FilmCardProps = {
  videoSrc : string;
  imageSrc : string;
  id : string;
  onMouseOver : (id : string) => void;
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
    <article onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className="small-film-card catalog__films-card">
      {isReadyToPreview && isActive
        ? <VideoPlayer videoSrc={props.videoSrc} posterSrc={props.imageSrc} />
        : <FilmPoster id={props.id} name={props.name} imgSrc={props.imageSrc} link={props.link}/>}
    </article>
  );
}
