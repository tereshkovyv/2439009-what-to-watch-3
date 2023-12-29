import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import {AuthorizationStatus} from '../../consts.ts';
import {useAppSelector} from '../../hooks';
import {getUserData} from '../../store/reducers/user/selectors.ts';

type PrivateRouteProps = {
  children : JSX.Element;
}

export function PrivateRoute(props : PrivateRouteProps){
  const authorizationStatus = useAppSelector(getUserData).authorizationStatus;
  return authorizationStatus === AuthorizationStatus.Auth
    ? props.children
    : <SignInScreen/>;
}
