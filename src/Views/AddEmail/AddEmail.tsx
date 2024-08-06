import { useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../Components/Atoms/CustomButton';
import CustomTextInput from '../../Components/Atoms/CustomTextInput';
import { db } from '../../Utils/firebaseConfig';
import { updateUserData } from '../../Store/User';
import { ROUTES_CONFIG, STRING } from '../../Shared/Constants';
import { isValidEmail } from '../../Utils/checkValidity';
import ErrorText from '../../Components/Atoms/ErrorText/ErrorText';
import { RootState } from '../../Store';

function AddEmail() {
  // state use
  const [isTextFieldFocussedOnce, setIsTextFieldFocussedOnce] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // navigation use
  const navigate = useNavigate();

  // redux use
  const dispatch = useDispatch();
  const { email: userEmail } = useSelector((state: RootState) => state.user);
  const [email, setEmail] = useState(userEmail);

  // functions
  const handleEmailSubmit = () => {
    setIsSubmitted(true);
    if (email.trim() === '' || !isValidEmail(email)) {
      return;
    }
    const checkUserEmailAndDispatchEmail = async () => {
      const q = query(collection(db, 'users'), where('email', '==', email));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs.length) {
        toast.error('Email address already exists.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
        return;
      }
      dispatch(updateUserData({ email }));
      navigate(ROUTES_CONFIG.PASSWORD.path);
    };
    checkUserEmailAndDispatchEmail();
  };

  return (
    <div className="flex flex-1 items-center flex-col justify-center self-center mb-16">
      <p className="text-3xl font-medium mb-6">{STRING.ADD_EMAIL.heading}</p>
      <div className="flex flex-1 flex-col justify-center w-[60%]">
        <div>
          <CustomTextInput
            placeholder={STRING.ADD_EMAIL.emailPlaceholder}
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
          <ErrorText text={STRING.ADD_EMAIL.errorEmailInvalid} />
        ) : null}
        {!email && isSubmitted ? (
          <ErrorText text={STRING.ADD_EMAIL.errorEmailInvalid} />
        ) : null}
        <div className="mt-32">
          <CustomButton text="Continue" onPress={handleEmailSubmit} />
        </div>
      </div>
    </div>
  );
}

export default AddEmail;
