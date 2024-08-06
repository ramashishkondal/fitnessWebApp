import { Link, useNavigate } from 'react-router-dom';

import {
  LandingPageImage,
  ROUTES_CONFIG,
  STRING,
} from '../../Shared/Constants';

function LandingPage() {
  const navigate = useNavigate();
  // functions
  const goToAddEmail = () => {
    navigate(ROUTES_CONFIG.EMAIL.path);
  };
  return (
    <div className="flex flex-1  flex-col justify-center items-center">
      <p className="text-5xl text-black font-semibold mt-12">
        {STRING.LANDING_PAGE.heading}
      </p>
      <p className="text-xl text-gray-300 mt-4">
        {STRING.LANDING_PAGE.description}
      </p>
      <img
        src={LandingPageImage}
        alt="fitness landing page main"
        className="w-[800px] my-6"
      />
      <div className="max-w-[35%] w-full mt-4">
        <button
          type="button"
          className="flex flex-1 rounded-full w-[100%] justify-center items-center font-semibold bg-customPurple py-4 text-white text-2xl px-3"
          onClick={goToAddEmail}
        >
          Get Started
        </button>
      </div>
      <p className="mt-3 text-lg text-gray-300">
        {STRING.LANDING_PAGE.alreadyHaveAnAccount}
        <Link
          to={ROUTES_CONFIG.SIGN_IN.path}
          className=" text-customPurple font-medium ml-2"
        >
          {STRING.LANDING_PAGE.signInInstead}
        </Link>
      </p>
    </div>
  );
}

export default LandingPage;
