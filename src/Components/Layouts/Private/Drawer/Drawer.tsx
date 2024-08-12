import { MouseEventHandler, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../../../Utils/firebaseConfig';
import { updateUserData } from '../../../../Store/User';
import { PRIVATE_ROUTES } from '../../../../Routes/PrivateRoutes';
import { ROUTES_CONFIG } from '../../../../Shared/Constants';

function Drawer() {
  const dispatch = useDispatch();
  const onLogoutPressed: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      await auth.signOut();
      dispatch(updateUserData({ id: null }));
    } catch (error) {
      console.log('failed loggin out ', error);
    }
  };

  const location = useLocation();

  const focusedLocation = useMemo(
    () => PRIVATE_ROUTES.find((val) => val.path === location.pathname),
    [location]
  );

  return (
    <div className="bg-customGray300 w-60 flex flex-col min-h-screen">
      <Link
        to={ROUTES_CONFIG.HOME.path}
        className={`flex justify-center ${
          focusedLocation?.title === ROUTES_CONFIG.HOME.title
            ? 'bg-customPurple'
            : 'bg-customGray300'
        } p-2`}
      >
        <p>Home</p>
      </Link>
      <Link
        to={ROUTES_CONFIG.COMMUNITY.path}
        className={`flex justify-center ${
          focusedLocation?.title === ROUTES_CONFIG.COMMUNITY.title
            ? 'bg-customPurple'
            : 'bg-customGray300'
        } p-2`}
      >
        <p>Community</p>
      </Link>
      <Link
        to={ROUTES_CONFIG.SETTINGS.path}
        className={`flex justify-center ${
          focusedLocation?.title === ROUTES_CONFIG.SETTINGS.title
            ? 'bg-customPurple'
            : 'bg-customGray300'
        } p-2`}
      >
        <p>Settings</p>
      </Link>
      <button type="button" className="border p-2" onClick={onLogoutPressed}>
        Log out
      </button>
    </div>
  );
}

export default Drawer;
