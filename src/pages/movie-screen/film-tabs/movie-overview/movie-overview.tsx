import {useAppSelector} from '../../../../hooks';
import {getFilm} from '../../../../store/reducers/films/selectors.ts';

const RATES = new Map<number, string>([
  [0 , 'Bad'],
  [3 , 'Normal'],
  [5 , 'Good'],
  [8 , 'Very good'],
  [10 , 'Awesome']
]);

function getRateDescription(rating : string){
  const numberString = Number(rating);
  let answer = '';
  for (const rate of RATES){
    if (numberString > rate[0]){
      answer = rate[1];
    }
  }
  return answer;
}

export default function MovieOverview(){
  const filmData = useAppSelector(getFilm);
  if (!filmData.film) {
    return <h5>Ошибка загрузки данных</h5>;
  }
  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">{filmData.film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRateDescription(filmData.film.rating)}</span>
          <span className="film-rating__count">{filmData.film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p> {filmData.film.description}</p>

        <p className="film-card__director"><strong>Director:{filmData.film.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {filmData.film.starring.slice(0, 4).join(', ')}
            {(filmData.film.starring.length && filmData.film.starring.length >= 4) && 'and other'}
          </strong>
        </p>
      </div>
    </>
  );
}
