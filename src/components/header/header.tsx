import AuthorizedUserBlock from './authorized-user-block/authorized-user-block.tsx';
import {useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import UnauthorizedUserBlock from './unauthorized-user-block/unauthorized-user-block.tsx';
import {Link} from 'react-router-dom';
import {getUserData} from '../../store/reducers/user/selectors.ts';
import {useEffect} from 'react';
import {store} from '../../store';
import {checkAuthAction} from '../../store/api-actions/user.ts';

export default function Header(){
  const authorizationStatus = useAppSelector(getUserData).authorizationStatus;
  useEffect(() => {
    store.dispatch(checkAuthAction());
  }, [authorizationStatus]);
  return(
    <header className="page-header film-card__head">
      <div className="logo">
        <Link to={AppRoute.Root} className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {authorizationStatus === AuthorizationStatus.Auth ? <AuthorizedUserBlock/> : <UnauthorizedUserBlock/>}
    </header>
  );
}

