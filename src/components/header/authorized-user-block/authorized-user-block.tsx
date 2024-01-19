import {store} from '../../../store';
import {checkAuthAction, logoutAction} from '../../../store/api-actions/user.ts';
import {useEffect} from 'react';
import {useAppSelector} from '../../../hooks';
import {getUserData} from '../../../store/reducers/user/selectors.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../consts.ts';

export default function AuthorizedUserBlock(){
  const userData = useAppSelector(getUserData);
  useEffect(()=>{
    checkAuthAction();
  }, []);
  function handleSignOutButtonClick(){
    store.dispatch(logoutAction());
  }
  return(
    <ul className="user-block">
      <li className="user-block__item" >
        <Link to={AppRoute.MyList}>
          <div className="user-block__avatar">
            <img src={userData.userData?.avatarUrl} alt="User avatar" width="63" height="63"/>
          </div>
        </Link>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" onClick={handleSignOutButtonClick}>Sign out</a>
      </li>
    </ul>
  );
}
