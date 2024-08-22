import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { ChangeEventHandler, useState } from 'react';
import { query, collection, where, getDocs } from 'firebase/firestore';
import { LeftArrow, ROUTES_CONFIG } from '../../Shared/Constants';
import CustomTextInput from '../../Components/Atoms/CustomTextInput';
import CustomButton from '../../Components/Atoms/CustomButton';
import { auth, db } from '../../Utils/firebaseConfig';

function ForgotPassword() {
  // state use
  const [email, setEmail] = useState('');

  // navigate use
  const navigate = useNavigate();

  // functions
  const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setEmail(e.target.value);
  const navigateBack = () => {
    navigate(ROUTES_CONFIG.SIGN_IN.path);
  };
  const handlePasswordReset = async () => {
    const q = query(collection(db, 'users'), where('email', '==', email));
    try {
      const snapshot = await getDocs(q);
      if (snapshot.empty) {
        if (
          window.confirm(
            'Email address is not registered with Fitness App. Would you like to register?'
          )
        ) {
          navigate(ROUTES_CONFIG.LANDING_PAGE.path);
        }
        return;
      }
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      // console.error('error encountered while sending reset email', error);
    }
  };
  const handleSubmit = () => {
    handlePasswordReset();
  };
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="bg-white mt-10 min-w-[520px] shadow-xl shadow-gray-400 rounded-lg">
        <div className="w-full bg-customPurple h-2 rounded-t-3xl" />
        <button type="button" onClick={navigateBack}>
          <img src={LeftArrow} alt="Back button" className="size-6 m-6" />
        </button>
        <div className="flex flex-col">
          <p className="text-3xl font-semibold text-center my-10">
            What is your email address?
          </p>
          <div className="rounded-lg border border-gray-300 my-2 mx-12">
            <CustomTextInput
              placeholder="Enter your email address"
              onChange={handleEmailChange}
            />
          </div>

          <div className="mx-12 my-12 mt-24">
            <CustomButton text="Continue" onPress={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
