import { useNavigate } from 'react-router-dom';
import { LeftArrow } from '../../Shared/Constants';
import CustomTextInput from '../../Components/Atoms/CustomTextInput';
import CustomButton from '../../Components/Atoms/CustomButton';
import SocialLogins from '../../Components/Molecules/SocialLogins';

function SignIn() {
  // navigate use
  const navigate = useNavigate();

  // functions
  const navigateBack = () => {
    navigate('-1');
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
            <CustomTextInput placeholder="Email Address" />
          </div>
          <div className="rounded-lg border border-gray-300 my-2 mx-12">
            <CustomTextInput placeholder="Password" />
          </div>
          <SocialLogins />
          <div className="mx-12 my-12">
            <CustomButton text="Continue" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
