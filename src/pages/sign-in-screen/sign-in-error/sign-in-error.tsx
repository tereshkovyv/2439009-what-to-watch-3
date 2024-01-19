import {useAppSelector} from '../../../hooks';
import {getError} from '../../../store/reducers/error/selectors.ts';

export default function SignInError(){
  const errors = useAppSelector(getError)?.details.map((errorData) => errorData.messages).flat();
  return(
    <div className="sign-in__message" >
      {errors?.map((text) => <div key={text}><p >{text}</p><br/></div>)}
    </div>
  );
}
