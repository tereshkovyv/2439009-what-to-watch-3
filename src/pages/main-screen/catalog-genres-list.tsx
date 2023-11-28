import {store} from '../../store';
import {changeGenre, loadFilms} from '../../store/action.ts';
import {useState} from 'react';

type CatalogGenresListProps = {
    items : string[];
}

export default function CatalogGenresList(props : CatalogGenresListProps){
  const [activeItemName, setActiveItemName] = useState('All genres');
  function onClick(genre : string){
    store.dispatch(changeGenre(genre));
    store.dispatch(loadFilms());
    setActiveItemName(genre);
  }
  return (
    <ul className="catalog__genres-list">
      {props.items.map((itemProps) => (
        <li key={itemProps} className={`catalog__genres-item catalog__genres-item${ itemProps === activeItemName ? '--active' : ''}`}>
          <a onClick={() => onClick(itemProps)} className="catalog__genres-link" >{itemProps}</a>
        </li>
      ))}
    </ul>
  );
}
