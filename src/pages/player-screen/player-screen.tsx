import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';
import {store} from '../../store';
import {fetchFilmAction} from '../../store/api-actions/films.ts';
import {useAppSelector} from '../../hooks';
import {getFilm} from '../../store/reducers/films/selectors.ts';
import {FullScreen, useFullScreenHandle} from 'react-full-screen';

type playerState = {
  currentTime : number;
  currentDownloadProgress : number;
  timeRemaining : string;
}


function AddZero(value: number) {
  return value >= 10 ? value.toString() : `0${value}`;
}
function FormatTime(time : number){
  return `-${time >= 3600 ? `${AddZero(Math.round(time / 3600)) }:` : ''}${AddZero(Math.round(time / 60))}:${AddZero(time % 60)}`;
}

export default function PlayerScreen(){
  const [playerState, setPlayerState] = useState<playerState>({
    currentTime : 0,
    currentDownloadProgress : 0,
    timeRemaining : '0'
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFillScreenMode, setIsFullScreenMode] = useState(false);
  const fullScreenHandle = useFullScreenHandle();
  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(() => {
    if (id !== undefined){
      store.dispatch(fetchFilmAction(id));
    }
  }, []);
  const film = useAppSelector(getFilm);
  const videoRef = useRef<HTMLVideoElement>(null);

  function onPlay(){
    if(videoRef.current){
      if(isPlaying){
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }
  function onFullScreenPressed(){
    if (isFillScreenMode){
      fullScreenHandle.exit();
    } else {
      fullScreenHandle.enter();
    }
    setIsFullScreenMode(!isFillScreenMode);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if(videoRef.current !== null){
        setPlayerState({...playerState,
          currentTime : Math.round(videoRef.current.currentTime * 100 / videoRef.current.duration),
          currentDownloadProgress : videoRef.current.buffered.end(0) * 100 / videoRef.current.duration,
          timeRemaining : FormatTime(Math.round(videoRef.current.duration - videoRef.current.currentTime))
        });
      }
    }, 250);
    return () => clearInterval(timer);
  }, []);

  if (film === null){
    return <h5>Ошибка загрузка данных</h5>;
  }
  return (
    <FullScreen handle={fullScreenHandle}>
      <div className="player">
        <video ref={videoRef} src={film.videoLink} className="player__video" poster={film.posterImage}></video>

        <button onClick={() => navigate(-1)} type="button" className="player__exit">Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={playerState.currentDownloadProgress} max="100"></progress>
              <div className="player__toggler" style={{left: `${playerState.currentTime }%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{playerState.timeRemaining}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={onPlay}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                {isPlaying ? <use xlinkHref="#pause"></use> : <use xlinkHref="#play-s"></use>}
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>

            <button onClick={onFullScreenPressed} type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </FullScreen>
  );
}
