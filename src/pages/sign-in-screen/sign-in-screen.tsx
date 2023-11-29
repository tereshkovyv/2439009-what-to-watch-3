import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';
import {FormEvent, useState} from 'react';
import {store} from '../../store';
import {checkAuthAction, loginAction} from '../../store/api-actions.tsx';
import {useAppSelector} from '../../hooks';
import SignInError from './sign-in-error.tsx';

export default function SignInScreen(){
  const errors = useAppSelector((state) => state.error);

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  function onSubmit(evt : FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    store.dispatch(loginAction({login : emailValue, password : passwordValue}));
    store.dispatch(checkAuthAction());
  }

  return (
    <div className="user-page">
      <Header/>

      <div className="sign-in user-page__content">
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
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  );
}
