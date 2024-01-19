import Footer from '../../components/footer/footer.tsx';
import Header from '../../components/header/header.tsx';
import SignInForm from './sign-in-form/sign-in-form.tsx';

export default function SignInScreen(){
  return (
    <div className="user-page">
      <Header/>
      <div className="sign-in user-page__content">
        <SignInForm/>
      </div>
      <Footer/>
    </div>
  );
}
