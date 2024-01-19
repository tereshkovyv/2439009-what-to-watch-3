import {useRef, useState} from 'react';
import VideoPlayer from './video-player/video-player.tsx';
import FilmPoster from './film-poster/film-poster.tsx';
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
  function handleMouseEnter(){
    if (timer.current !== null){
      clearTimeout(timer.current);
    }
    setIsActive(true);
    timer.current = setTimeout(() => {
      setIsReadyToPreview(true);
    }, 1000);
  }
  function handleMouseLeave(){
    setIsActive(false);
    setIsReadyToPreview(false);
  }
  function handleMouseClick(){
    navigate(`/films/${props.id}`);
  }
  return(
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleMouseClick}
      className="small-film-card catalog__films-card"
    >
      {isReadyToPreview && isActive
        ? <VideoPlayer videoSrc={props.videoSrc} posterSrc={props.imageSrc} />
        : <FilmPoster name={props.name} imgSrc={props.imageSrc} link={props.link}/>}
    </article>
  );
}
