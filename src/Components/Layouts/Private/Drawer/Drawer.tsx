import { MouseEventHandler, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../../../Utils/firebaseConfig';
import { updateUserData } from '../../../../Store/User';
import { PRIVATE_ROUTES } from '../../../../Routes/PrivateRoutes';
import {
  CommunityIcon,
  HomeIcon,
  LogOutIcon,
  ROUTES_CONFIG,
  SettingsIcon,
} from '../../../../Shared/Constants';
import CustomModal from '../../../Molecules/CustomModal';
import SettingsMenu from '../../../Molecules/SettingsMenu';

function Drawer() {
  // state use
  const [isLogoutModalShown, setIsLogoutModalShown] = useState(false);
  const [isSettingsMenuShown, setIsSettingsMenuShown] = useState(false);

  // redux use
  const dispatch = useDispatch();

  // router use
  const location = useLocation();

  // functions
  const focusedLocation = useMemo(
    () => PRIVATE_ROUTES.find((val) => val.path === location.pathname),
    [location]
  );
  const onLogoutPressed: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      await auth.signOut();
      dispatch(updateUserData({ id: null }));
    } catch (error) {
      // console.log('failed loggin out ', error);
    }
  };
  const showLogoutModal = () => {
    setIsLogoutModalShown(true);
  };
  const closeLogoutModal = () => {
    setIsLogoutModalShown(false);
  };
  const closeSettingsMenu = () => {
    setIsSettingsMenuShown(false);
  };
  const toggleSettingsMenu = () => {
    setIsSettingsMenuShown(!isSettingsMenuShown);
  };

  return (
    <>
      <CustomModal
        closeModal={closeLogoutModal}
        isModalShown={isLogoutModalShown}
      >
        <div className="mx-10 my-5">
          <p className="font-semibold text-2xl">Log out</p>
          <p className="my-9">Are you sure you want to logout?</p>
          <div className="flex justify-evenly">
            <button
              type="button"
              onClick={closeLogoutModal}
              className="px-6 py-1 rounded-md bg-customGray300"
            >
              NO
            </button>
            <button
              type="button"
              onClick={onLogoutPressed}
              className="px-6 py-1 rounded-md bg-customPurpleLight"
            >
              YES
            </button>
          </div>
        </div>
      </CustomModal>
      <div className="bg-customGray100 w-60 flex flex-col h-screen overflow-y-hidden p-3">
        <Link
          to={ROUTES_CONFIG.HOME.path}
          className={`flex pl-6 justify-center rounded-md my-0.5 ${
            focusedLocation?.title === ROUTES_CONFIG.HOME.title
              ? 'bg-customPurpleLight'
              : 'bg-customGray100'
          } p-2`}
        >
          <div className="flex flex-1 items-center">
            <img src={HomeIcon} alt="home" className="size-5" />
            <p className="ml-4">Home</p>
          </div>
        </Link>
        <Link
          to={ROUTES_CONFIG.COMMUNITY.path}
          className={`flex pl-6 justify-center rounded-md my-0.5 ${
            focusedLocation?.title === ROUTES_CONFIG.COMMUNITY.title
              ? 'bg-customPurpleLight'
              : 'bg-customGray100'
          } p-2`}
        >
          <div className="flex flex-1 items-center">
            <img src={CommunityIcon} alt="home" className="size-5" />
            <p className="ml-4">Community</p>
          </div>
        </Link>
        <button
          type="button"
          className={`flex pl-6 justify-center rounded-md flex-col my-0.5 ${
            isSettingsMenuShown ? 'bg-customPurpleLight' : 'bg-customGray100'
          } p-2`}
          onClick={toggleSettingsMenu}
        >
          <div className="flex flex-1 items-center relative">
            <img src={SettingsIcon} alt="home" className="size-5" />
            <p className="ml-4">Settings</p>
          </div>
          <SettingsMenu
            isMenuShown={isSettingsMenuShown}
            closeMenu={closeSettingsMenu}
          />
        </button>
        <button
          type="button"
          className="pl-6 p-2 my-0.5"
          onClick={showLogoutModal}
        >
          <div className="flex flex-1 items-center">
            <img src={LogOutIcon} alt="home" className="size-5" />
            <p className="ml-4">Log out</p>
          </div>
        </button>
      </div>
    </>
  );
}

export default Drawer;
