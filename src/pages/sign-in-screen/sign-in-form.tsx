import SignInError from './sign-in-error.tsx';
import AsyncComponent from '../../components/async-component/async-component.tsx';
import {useAppSelector} from '../../hooks';
import {getError} from '../../store/reducers/error/selectors.ts';
import {FormEvent, useState} from 'react';
import {getIsLoginDataLoading} from '../../store/reducers/user/selectors.ts';
import {store} from '../../store';
import {checkAuthAction, loginAction} from '../../store/api-actions/user.ts';

export default function SignInForm(){
  const errors = useAppSelector(getError);

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const isLoginDataLoading = useAppSelector(getIsLoginDataLoading);
  function onSubmit(evt : FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    store.dispatch(loginAction({login : emailValue, password : passwordValue}));
    store.dispatch(checkAuthAction());
  }

  return(
    <form onSubmit={onSubmit} className="sign-in__form" >
      {errors !== null && <SignInError/>}
      <div className="sign-in__fields">
        <div className="sign-in__field">
          <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
            id="user-email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
        </div>
        <div className="sign-in__field">
          <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
            id="user-password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)}
          />
          <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
        </div>
      </div>
      <div className="sign-in__submit">
        <button className="sign-in__btn" type="submit" disabled={isLoginDataLoading}>
          <AsyncComponent isLoading={isLoginDataLoading}>
            <div>Sign in</div>
          </AsyncComponent>
        </button>
      </div>
    </form>
  );
}
