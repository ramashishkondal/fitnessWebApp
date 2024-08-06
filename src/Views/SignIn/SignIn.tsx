import { useNavigate } from 'react-router-dom';
import { LeftArrow } from '../../Shared/Constants';

function SignIn() {
  // navigate use
  const navigate = useNavigate();

  // functions
  const navigateBack = () => {
    navigate('-1');
  };
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="bg-white mt-10 min-w-[520px] shadow-xl shadow-gray-400 rounded-lg shadow-lg">
        <div className="w-full bg-gray-300 h-2 rounded-t-3xl">
          <button type="button" onClick={navigateBack}>
            <img src={LeftArrow} alt="Back button" className="size-6 m-6" />
          </button>
        </div>
        <div>
          <p>sign In</p>
          <p>sign In</p>
          <p>sign In</p>
          <p>sign In</p>
          <p>sign In</p>
          <p>sign In</p>
          <p>sign In</p>
          <p>sign In</p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
