import {AppRoute, AuthorizationStatus} from '../../consts.ts';
import {useAppSelector} from '../../hooks';
import {getUserData} from '../../store/reducers/user/selectors.ts';
import {Navigate} from 'react-router-dom';
import {useEffect} from 'react';
import {checkAuthAction} from '../../store/api-actions/user.ts';
import {store} from '../../store';

type PrivateRouteProps = {
  children : JSX.Element;
}

export function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const authorizationStatus = useAppSelector(getUserData).authorizationStatus;
  useEffect(()=>{
    store.dispatch(checkAuthAction());
  }, [authorizationStatus]);
  if (authorizationStatus === AuthorizationStatus.Unknown){
    return (<h1>Загрузка...</h1>);
  }
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}
