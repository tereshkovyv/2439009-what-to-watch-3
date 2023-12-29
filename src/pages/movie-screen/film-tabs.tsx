import * as cn from 'classnames';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export type FilmTabElement = {
    name : string;
    src : string;
}

export type FilmTabsProps = {
    onChange : (a: string) => void;
}

const elements:FilmTabElement[] = [
  {
    name : 'Overview',
    src : '../Overview'
  },
  {
    name : 'Details',
    src : '/Details'
  },
  {
    name : 'Reviews',
    src : '/Reviews'
  }
];

export default function FilmTabs({onChange} : FilmTabsProps){
  const [activeElement, setActiveElement] = useState('Overview');
  function onChangeHandler(name : string){
    setActiveElement(name);
    onChange(name);
  }
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {elements.map((element) => (
            <li key={element.name} className={cn(
              'film-nav__item',
              {'film-nav__item--active' : element.name === activeElement}
            )}
            >
              <Link onClick={()=>onChangeHandler(element.name)} className="film-nav__link" to={''}>{element.name}</Link>
            </li>))}
        </ul>
      </nav>
    </div>
  );
}


