import {useAppSelector} from '../../hooks';

export default function SignInError(){
  const errors = useAppSelector((state) => state.error)?.messages;
  return(
    <div className="sign-in__message">
      {errors?.map((text) => <p key={text}>{text}</p>)}
    </div>
  );
  //sign-in__field--error
}
