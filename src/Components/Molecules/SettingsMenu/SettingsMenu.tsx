import { useDispatch, useSelector } from 'react-redux';
import Switch from 'react-switch';
import { memo, useMemo, useState } from 'react';
import { COLORS, STRING } from '../../../Shared/Constants';
import { RootState } from '../../../Store';
import SettingsMenuItem from '../../Atoms/SettingsMenuItem';
import { SettingsMenuProps } from './types';
import { updateSettingPushNotification } from '../../../Store/UserSettings';
import CustomModal from '../CustomModal';
import GiveFeedback from '../../Organisms/GiveFeedback';

function SettingsMenu({ isMenuShown, closeMenu }: Readonly<SettingsMenuProps>) {
  // state use
  const [showSettingsModal, setShowSettingsModal] = useState<
    'giveFeedback' | null
  >(null);
  // redux use
  const dispatch = useDispatch();
  const { allowPushNotifications } = useSelector(
    (state: RootState) => state.settings
  );

  // memo use
  const modalContent = useMemo(() => {
    if (showSettingsModal === 'giveFeedback') {
      return <GiveFeedback />;
    }
    return null;
  }, [showSettingsModal]);

  if (!isMenuShown) {
    return null;
  }
  // functions
  const closeSettingsModal = () => {
    setShowSettingsModal(null);
  };
  const handleEditProfilePressed = () => {};
  const handleInviteFriendPressed = () => {};
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
        className="fixed inset-0 flex
        cursor-default z-0"
        onClick={closeMenu}
      >
        <p />
      </button>

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
          onClick={handleInviteFriendPressed}
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
