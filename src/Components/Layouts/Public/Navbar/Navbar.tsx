import { Link } from 'react-router-dom';
import { AppLogo, ROUTES_CONFIG, STRING } from '../../../../Shared/Constants';

function Navbar() {
  return (
    <header className="border flex rounded-md px-3 py-2 justify-between items-center">
      <Link
        to={ROUTES_CONFIG.HOMEPAGE.path}
        className="flex content-center items-center ml-7"
      >
        <img src={AppLogo} alt="App Logo" className="size-6" />
        <p className="font-semibold text-xl mx-4">{STRING.APP_NAME}</p>
      </Link>
      <div className="flex justify-center items-center">
        <Link
          className="rounded-3xl bg-customPurple py-2 text-white text-sm px-4 font-medium"
          to={ROUTES_CONFIG.EMAIL.path}
        >
          {STRING.NAV_BAR.getStarted}
        </Link>
        <Link
          type="button"
          className="rounded-3xl bg-[#F5F0E5] py-2 text-black text-sm px-4 mx-2 font-medium"
          to={ROUTES_CONFIG.SIGN_IN.path}
        >
          {STRING.NAV_BAR.signIn}
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
