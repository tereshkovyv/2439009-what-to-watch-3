import {useRef, useState} from 'react';
import VideoPlayer from './video-player.tsx';
import FilmPoster from './film-poster.tsx';
import {TimeoutId} from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';
import {useNavigate} from 'react-router-dom';

type FilmCardProps = {
  id : string;
  videoSrc : string;
  imageSrc : string;
  name : string;
  link : string;
}

export default function FilmCard(props : FilmCardProps){
  const [isActive, setIsActive] = useState(false);
  const [isReadyToPreview, setIsReadyToPreview] = useState(false);
  const timer = useRef<TimeoutId | null>(null);
  const navigate = useNavigate();
  function onMouseEnterHandler(){
    if (timer.current !== null){
      clearTimeout(timer.current);
    }
    setIsActive(true);
    timer.current = setTimeout(() => {
      setIsReadyToPreview(true);
    }, 1000);
  }
  function onMouseLeaveHandler(){
    setIsActive(false);
    setIsReadyToPreview(false);
  }
  function onClick(){
    navigate(`/films/${props.id}`);
  }
  return(
    <article
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onClick={onClick}
      className="small-film-card catalog__films-card"
    >
      {isReadyToPreview && isActive
        ? <VideoPlayer videoSrc={props.videoSrc} posterSrc={props.imageSrc} />
        : <FilmPoster name={props.name} imgSrc={props.imageSrc} link={props.link}/>}
    </article>
  );
}
