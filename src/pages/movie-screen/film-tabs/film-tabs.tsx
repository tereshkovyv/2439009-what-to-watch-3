import * as cn from 'classnames';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import MovieOverview from './movie-overview.tsx';
import MovieDetails from './movie-details.tsx';
import MovieReviews from './movie-reviews.tsx';

const elements:string[] = [
  'Overview',
  'Details',
  'Reviews'
];

export default function FilmTabs(){
  const [activeElement, setActiveElement] = useState('Overview');
  return (
    <div className="film-card__desc">
      <div className="film-card__desc">
        <nav className="film-nav film-card__nav">
          <ul className="film-nav__list">
            {elements.map((element) => (
              <li key={element} className={cn(
                'film-nav__item',
                {'film-nav__item--active' : element === activeElement}
              )}
              >
                <Link onClick={()=>setActiveElement(element)} className="film-nav__link" to={''}>{element}</Link>
              </li>))}
          </ul>
        </nav>
      </div>
      {{
        'Overview' : <MovieOverview/>,
        'Details' : <MovieDetails/>,
        'Reviews' : <MovieReviews/>
      }[activeElement]}
    </div>
  );
}


