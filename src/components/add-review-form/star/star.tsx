type StarProps = {
  onClick : () => void;
  value : number;
}
export function Star(props : StarProps) {
  return (
    <>
      <input onChange={props.onClick} className="rating__input" id={`star-${ props.value}`} type="radio" name="rating"
        value={props.value}
      />
      <label className="rating__label" htmlFor={`star-${ props.value}`}>Rating {props.value}</label>
    </>);
}
