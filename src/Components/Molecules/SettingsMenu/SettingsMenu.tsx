import { useDispatch, useSelector } from 'react-redux';
import Switch from 'react-switch';
import { memo, useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS, ROUTES_CONFIG, STRING } from '../../../Shared/Constants';
import { RootState } from '../../../Store';
import SettingsMenuItem from '../../Atoms/SettingsMenuItem';
import { SettingsMenuProps } from './types';
import { updateSettingPushNotification } from '../../../Store/UserSettings';
import CustomModal from '../CustomModal';
import GiveFeedback from '../../Organisms/GiveFeedback';
import ResetPassword from '../../Organisms/ResetPassword';

function SettingsMenu({ isMenuShown, closeMenu }: Readonly<SettingsMenuProps>) {
  // state use
  const [showSettingsModal, setShowSettingsModal] = useState<
    'giveFeedback' | 'resetPassword' | null
  >(null);

  // navigate use
  const navigate = useNavigate();

  // redux use
  const dispatch = useDispatch();
  const { allowPushNotifications } = useSelector(
    (state: RootState) => state.settings
  );

  const closeSettingsModal = useCallback(() => {
    closeMenu();
    setShowSettingsModal(null);
  }, [closeMenu]);

  // memo use
  const modalContent = useMemo(() => {
    if (showSettingsModal === 'giveFeedback') {
      return <GiveFeedback />;
    }
    if (showSettingsModal === 'resetPassword') {
      return <ResetPassword closeModal={closeSettingsModal} />;
    }

    return null;
  }, [closeSettingsModal, showSettingsModal]);

  if (!isMenuShown) {
    return null;
  }
  // functions
  const handleEditProfilePressed = () => {
    navigate(ROUTES_CONFIG.EDIT_PROFILE.path);
  };
  const handleInviteFriendPressed = () => {};
  const handleResetPassword = () => {
    setShowSettingsModal('resetPassword');
  };
  const handleGiveFeedbackPressed = () => {
    setShowSettingsModal('giveFeedback');
  };
  const handlePushNotificationPressed = () => {
    dispatch(updateSettingPushNotification(!allowPushNotifications));
  };

  return (
    <>
      <CustomModal
        isModalShown={showSettingsModal !== null}
        closeModal={closeSettingsModal}
      >
        {modalContent}
      </CustomModal>
      <button
        type="button"
        className="bg-customPurpleLight ml-10 mt-2 rounded-md text-left z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <SettingsMenuItem
          text={STRING.SETTINGS.editProfile}
          onClick={handleEditProfilePressed}
        />
        <SettingsMenuItem
          text={STRING.SETTINGS.inviteFriend}
          onClick={handleInviteFriendPressed}
        />

        <button
          type="button"
          className="w-full flex text-left py-2 px-2 my-0.5 rounded-md hover:bg-customGray200 items-center justify-between"
          onClick={handlePushNotificationPressed}
        >
          <p>{STRING.SETTINGS.pushNotification}</p>
          <Switch
            checked={allowPushNotifications}
            onChange={(isChecked) => {
              dispatch(updateSettingPushNotification(isChecked));
            }}
            checkedIcon={false}
            uncheckedIcon={false}
            width={46}
            height={30}
            className="pl-1"
            onColor={COLORS.SECONDARY.GREEN}
          />
        </button>

        <SettingsMenuItem
          text={STRING.SETTINGS.resetPassword}
          onClick={handleResetPassword}
        />
        <SettingsMenuItem
          text={STRING.SETTINGS.giveFeedback}
          onClick={handleGiveFeedbackPressed}
        />
        <SettingsMenuItem
          text={STRING.SETTINGS.aboutUs}
          onClick={handleInviteFriendPressed}
        />
      </button>
    </>
  );
}

export default memo(SettingsMenu);
