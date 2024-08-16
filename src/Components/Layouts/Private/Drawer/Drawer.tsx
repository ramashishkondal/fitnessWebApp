import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
import LogOut from '../../../Molecules/LogOut';

function Drawer() {
  // state use
  const [isLogoutModalShown, setIsLogoutModalShown] = useState(false);
  const [isSettingsMenuShown, setIsSettingsMenuShown] = useState(false);

  // router use
  const location = useLocation();

  // functions
  const focusedLocation = useMemo(
    () => PRIVATE_ROUTES.find((val) => val.path === location.pathname),
    [location]
  );

  const showLogoutModal = () => {
    setIsLogoutModalShown(true);
  };
  const closeLogoutModal = () => {
    setIsLogoutModalShown(false);
  };
  const closeSettingsMenu = () => {
    setIsSettingsMenuShown(false);
  };
  const showSettingsMenu = () => {
    setIsSettingsMenuShown(true);
  };

  return (
    <>
      <CustomModal
        closeModal={closeLogoutModal}
        isModalShown={isLogoutModalShown}
      >
        <LogOut closeModal={closeLogoutModal} />
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
          onClick={showSettingsMenu}
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
