import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../Components/Atoms/CustomButton';
import CustomTextInput from '../../Components/Atoms/CustomTextInput';
import { db } from '../../Utils/firebaseConfig';
import { updateUserData } from '../../Store/User';
import { ROUTES_CONFIG } from '../../Shared/Constants';
import { isValidEmail } from '../../Utils/checkValidity';
import ErrorText from '../../Components/Atoms/ErrorText/ErrorText';

function AddEmail() {
  // state use
  const [email, setEmail] = useState('');
  const [isTextFieldFocussedOnce, setIsTextFieldFocussedOnce] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // navigation use
  const navigate = useNavigate();

  // redux use
  const dispatch = useDispatch();

  // effect use
  useEffect(() => {
    getDoc(doc(db, 'users', '0CGFfnPziQUffjUm6SAp5T6BBi22')).then((res) => {
      console.log(res.data());
    });
  }, []);

  // functions
  const handleEmailSubmit = () => {
    setIsSubmitted(true);
    if (!isValidEmail(email)) {
      return;
    }
    dispatch(updateUserData({ email }));
    navigate(ROUTES_CONFIG.PASSWORD.path);
  };
  return (
    <div className="flex flex-1 items-center flex-col justify-center self-center mb-16">
      <p className="text-3xl font-medium mb-6">What is your email address?</p>
      <div className="flex flex-1 flex-col justify-center w-[60%]">
        <div>
          <CustomTextInput
            placeholder="Enter your email address"
            value={email}
            onBlur={() => {
              setIsTextFieldFocussedOnce(true);
            }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        {isTextFieldFocussedOnce && email && !isValidEmail(email) ? (
          <ErrorText text="Please enter a valid email address." />
        ) : null}
        {!email && isSubmitted ? (
          <ErrorText text="Please enter your email address." />
        ) : null}
        <div className="mt-32">
          <CustomButton text="Continue" onPress={handleEmailSubmit} />
        </div>
      </div>
    </div>
  );
}

export default AddEmail;
