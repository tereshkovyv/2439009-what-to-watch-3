export type CatalogGenresItemProps = {
  isActive : boolean;
  href : string;
  value : string;
}

export function CatalogGenresItem(props : CatalogGenresItemProps){
  return(
    <li className={`catalog__genres-item catalog__genres-item${ props.isActive ? '--active' : ''}`}>
      <a href={props.href} className="catalog__genres-link">{props.value}</a>
    </li>
  );
}
