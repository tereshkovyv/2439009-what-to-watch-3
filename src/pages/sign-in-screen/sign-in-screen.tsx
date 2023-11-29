import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';
import {useRef} from 'react';
import {store} from '../../store';
import {checkAuthAction, loginAction} from '../../store/api-actions.tsx';
import {useAppSelector} from '../../hooks';
import SignInError from './sign-in-error.tsx';

export default function SignInScreen(){
  const inputRef = useRef(null);
  const errors = useAppSelector((state) => state.error);
  function onSubmit(evt){
    evt.preventDefault();
    const userEmail = (new FormData(inputRef.current)).get('user-email');
    const userPassword = (new FormData(inputRef.current)).get('user-password');
    store.dispatch(loginAction({login : userEmail, password : userPassword}));
    store.dispatch(checkAuthAction());
  }
  return (
    <div className="user-page">
      <Header/>

      <div className="sign-in user-page__content">
        <form onSubmit={onSubmit} className="sign-in__form" ref={inputRef}>
          {errors !== null && <SignInError/>}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
                id="user-password"
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
