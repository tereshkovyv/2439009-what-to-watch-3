import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import {AuthorizationStatus} from '../../consts.ts';
import {useAppSelector} from '../../hooks';

type PrivateRouteProps = {
  children : JSX.Element;
}

export function PrivateRoute(props : PrivateRouteProps){
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return authorizationStatus === AuthorizationStatus.Auth
    ? props.children
    : <SignInScreen/>;
}
