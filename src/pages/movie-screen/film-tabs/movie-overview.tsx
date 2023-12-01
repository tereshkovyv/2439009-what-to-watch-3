import {useAppSelector} from '../../../hooks';
import {getFilm} from '../../../store/reducers/films/selectors.ts';

function GetRateDescription(rating : string){
  const rates = new Map<number, string>([
    [0 , 'Bad'],
    [3 , 'Normal'],
    [5 , 'Good'],
    [8 , 'Very good'],
    [10 , 'Awesome']
  ]);
  const numberString = Number(rating);
  let answer = '';
  for (const rate of rates){
    if (numberString > rate[0]){
      answer = rate[1];
    }
  }
  return answer;
}

export default function MovieOverview(){
  const filmData = useAppSelector(getFilm);
  if (filmData === null) {
    return <h5>Ошибка загрузки данных</h5>;
  }
  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{filmData.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{GetRateDescription(filmData.rating)}</span>
          <span className="film-rating__count">{filmData.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p> {filmData.description}</p>

        <p className="film-card__director"><strong>Director:{filmData.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {filmData.starring.slice(0, 4).join(', ')}
            {(filmData.starring.length && filmData.starring.length >= 4) && 'and other'}
          </strong>
        </p>
      </div>
    </>
  );
}
