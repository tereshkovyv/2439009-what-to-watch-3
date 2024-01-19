import {useState} from 'react';

const ALL_GENRES_NAME = 'All genres';

type CatalogGenresListProps = {
    onChange : (genre : string) => void;
    items : string[];
}

export default function CatalogGenresList(props : CatalogGenresListProps){
  const [activeItemName, setActiveItemName] = useState(ALL_GENRES_NAME);
  function handleGenreChoosing(genre : string){
    setActiveItemName(genre);
    props.onChange(genre);
  }
  return (
    <ul className="catalog__genres-list">
      {props.items.map((itemProps) => (
        <li key={itemProps} className={`catalog__genres-item catalog__genres-item${ itemProps === activeItemName ? '--active' : ''}`}>
          <a onClick={() => handleGenreChoosing(itemProps)} className="catalog__genres-link" >{itemProps}</a>
        </li>
      ))}
    </ul>
  );
}
