import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

type PrivateRouteProps = {
  authorizationStatus : AuthorizationStatus;
  children : JSX.Element;
}

export function PrivateRoute(props : PrivateRouteProps){
  return props.authorizationStatus === AuthorizationStatus.Auth
    ? props.children
    : <SignInScreen/>;
}
