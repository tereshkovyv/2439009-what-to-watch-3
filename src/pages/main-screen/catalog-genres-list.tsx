import {store} from '../../store';
import {changeGenre} from '../../store/action.ts';
import {useState} from 'react';
import {fetchFilmsAction} from '../../store/api-actions.tsx';

type CatalogGenresListProps = {
    items : string[];
}

export default function CatalogGenresList(props : CatalogGenresListProps){
  const [activeItemName, setActiveItemName] = useState('All genres');
  function onClick(genre : string){
    store.dispatch(changeGenre(genre));
    store.dispatch(fetchFilmsAction());
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
