export type CatalogGenresItemProps = {
  isActive : boolean;
  value : string;
  onclick : () => void;
}

export function CatalogGenresItem(props : CatalogGenresItemProps){
  function onClick() {
    props.onclick();
  }
  return(
    <li className={`catalog__genres-item catalog__genres-item${ props.isActive ? '--active' : ''}`}>
      <a onClick={onClick} className="catalog__genres-link" >{props.value}</a>
    </li>
  );
}
