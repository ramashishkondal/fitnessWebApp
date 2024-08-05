import { Link } from 'react-router-dom';
import { AppLogo, ROUTES_CONFIG } from '../../../../Shared/Constants';

function Navbar() {
  return (
    <header className="border flex rounded-md px-3 py-2 justify-between items-center">
      <div className="flex content-center items-center ml-7">
        <img src={AppLogo} alt="App Logo" className="size-6" />
        <p className="font-semibold text-base mx-4">Fitness App</p>
      </div>
      <div className="flex justify-center items-center">
        <Link
          className="rounded-3xl bg-purple-500 py-2 text-white text-sm px-4 font-medium"
          to={ROUTES_CONFIG.EMAIL.path}
        >
          Get Started
        </Link>
        <Link
          type="button"
          className="rounded-3xl bg-[#F5F0E5] py-2 text-black text-sm px-4 mx-2 font-medium"
          to={ROUTES_CONFIG.SIGN_IN.path}
        >
          Sign In
        </Link>
        <Link
          className="bg-[#F5F0E5] rounded-full p-2 mx-7"
          to={ROUTES_CONFIG.HOMEPAGE.path}
        >
          <img src={AppLogo} className="size-6  " alt="app logo to go home" />
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
