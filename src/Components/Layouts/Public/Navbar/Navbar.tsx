import { AppLogo } from '../../../../Constants/icons';
import { ROUTES } from '../../../../Shared/Constants';
import NavBarHeading from '../../../Atoms/NavBarHeading';

function Navbar() {
  return (
    <header className="border flex rounded-md">
      <NavBarHeading goTo={ROUTES.HOMEPAGE} title="Home" />
      <NavBarHeading goTo={ROUTES.LOGIN} title="Login" />
      <div className="justify-center border flex flex-1 items-center bg-slate-200">
        <img src={AppLogo} alt="app logo" className="size-10" />
      </div>
    </header>
  );
}

export default Navbar;
