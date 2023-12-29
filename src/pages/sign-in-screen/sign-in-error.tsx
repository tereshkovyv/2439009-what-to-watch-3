import {useAppSelector} from '../../hooks';
import {getError} from '../../store/reducers/error/selectors.ts';

export default function SignInError(){
  const errors = useAppSelector(getError)?.details.map((errorData) => errorData.messages).flat();
  return(
    <div className="sign-in__message">
      {errors?.map((text) => <><p key={text}>{text}</p><br/></>)}
    </div>
  );
}
