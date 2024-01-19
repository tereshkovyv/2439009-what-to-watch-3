import {Link} from 'react-router-dom';

export default function UnauthorizedUserBlock(){
  return(
    <div className="user-block">
      <Link to={'/login'} className="user-block__link">Sign in</Link>
    </div>
  );
}
