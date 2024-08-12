import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ChangeEventHandler, useState } from 'react';
import { LeftArrow } from '../../Shared/Constants';
import CustomTextInput from '../../Components/Atoms/CustomTextInput';
import CustomButton from '../../Components/Atoms/CustomButton';
import SocialLogins from '../../Components/Molecules/SocialLogins';
import { auth } from '../../Utils/firebaseConfig';
import { isValidEmail } from '../../Utils/checkValidity';
import ErrorText from '../../Components/Atoms/ErrorText/ErrorText';

function SignIn() {
  // state ues
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // navigate use
  const navigate = useNavigate();

  // functions
  const navigateBack = () => {
    navigate('-1');
  };
  const onChangeEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };
  const onEmailTextInputBlurred = () => {
    setIsBlurred(true);
  };

  const signInPressed = async () => {
    setIsSubmitted(true);
    setIsLoading(true);
    if (!isValidEmail(email) || !password) {
      setIsLoading(false);
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log('error while signing user in', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="bg-white mt-10 min-w-[520px] shadow-xl shadow-gray-400 rounded-lg">
        <div className="w-full bg-customPurple h-2 rounded-t-3xl" />
        <button type="button" onClick={navigateBack}>
          <img src={LeftArrow} alt="Back button" className="size-6 m-6" />
        </button>
        <div className="flex flex-col">
          <div className="rounded-lg border border-gray-300 my-2 mx-12 ">
            <CustomTextInput
              placeholder="Email Address"
              onChange={onChangeEmail}
              onBlur={onEmailTextInputBlurred}
            />
          </div>
          <div className="mx-12">
            {isBlurred && !isValidEmail(email) && email ? (
              <ErrorText text="Please enter a vaild email address." />
            ) : null}
            {!email && isSubmitted && (
              <ErrorText text="Please enter your email address." />
            )}
          </div>
          <div className="rounded-lg border border-gray-300 my-2 mx-12">
            <CustomTextInput
              placeholder="Password"
              onChange={onChangePassword}
            />
          </div>
          <div className="mx-12">
            {!password && isSubmitted ? (
              <ErrorText text="Please enter your password." />
            ) : null}
          </div>
          <SocialLogins />
          <div className="mx-12 my-12">
            <CustomButton
              text="Continue"
              onPress={signInPressed}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
