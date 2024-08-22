import { useSelector } from 'react-redux';
import { useCallback, useMemo, useState } from 'react';
import { RootState } from '../../Store';
import { Pencil } from '../../Shared/Constants';
import CustomModal from '../../Components/Molecules/CustomModal';
import ChangeUserInfo from '../../Components/Molecules/ChangeUserInfo';
import ChangeUserPreferences from '../../Components/Molecules/ChangeUserPreferences';
import ChangeUserInterests from '../../Components/Molecules/ChangeUserInterests';
import { EditModalType } from './types';

function EditProfile() {
  // state use
  const [editModalType, setEditModalType] = useState<EditModalType>(null);

  // redux use
  const { firstName, lastName, email, gender, photo, preferences, interests } =
    useSelector((state: RootState) => state.user);

  // function
  const closeEditModal = useCallback(() => {
    setEditModalType(null);
  }, []);

  // memo use
  const modalContent = useMemo(() => {
    if (editModalType === 'changeUserInfo') {
      return <ChangeUserInfo closeModal={closeEditModal} />;
    }
    if (editModalType === 'changeUserPreferences') {
      return <ChangeUserPreferences closeModal={closeEditModal} />;
    }
    if (editModalType === 'changeUserInterests') {
      return <ChangeUserInterests closeModal={closeEditModal} />;
    }
    return null;
  }, [editModalType, closeEditModal]);

  // functions
  const setModalType = (type: EditModalType) => {
    return () => {
      setEditModalType(type);
    };
  };

  return (
    <>
      <CustomModal
        isModalShown={editModalType !== null}
        closeModal={closeEditModal}
      >
        {modalContent}
      </CustomModal>
      <div className="p-12">
        <div className="flex justify-between">
          <p className="mt-2">User Info</p>
          <button
            type="button"
            className="bg-customGray400 rounded-full p-2"
            onClick={setModalType('changeUserInfo')}
          >
            <img src={Pencil} alt="edit user info" className="size-4" />
          </button>
        </div>
        <div className="shadow-md rounded-md p-3 my-2">
          <div className="flex items-center">
            <img
              src={photo}
              alt="user profile"
              className="size-14 rounded-full"
            />
            <div className="ml-4">
              <div className="flex">
                <p>Name:</p>
                <p className="ml-2">{`${firstName} ${lastName}`}</p>
              </div>
              <div className="flex">
                <p>Email:</p>
                <p className="ml-2">{email}</p>
              </div>
              {gender && (
                <div className="flex">
                  <p>Gender:</p>
                  <p className="ml-2">{gender}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="mt-2">Preferences</p>
          <button
            type="button"
            className="bg-customGray400 rounded-full p-2"
            onClick={setModalType('changeUserPreferences')}
          >
            <img src={Pencil} alt="edit user info" className="size-4" />
          </button>
        </div>
        <div className="shadow-md rounded-md p-3 my-2">
          <div className="flex text-customPurple">
            {preferences
              .filter((val) => val.selected)
              .map((val) => (
                <div
                  key={val.title}
                  className="bg-customPurpleLight m-2 p-4 rounded-full px-6"
                >
                  <p>{val.title}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-between">
          <p className="mt-2">Interests</p>
          <button
            type="button"
            className="bg-customGray400 rounded-full p-2"
            onClick={setModalType('changeUserInterests')}
          >
            <img src={Pencil} alt="edit user info" className="size-4" />
          </button>
        </div>
        <div className="shadow-md rounded-md p-3 my-2">
          <div className="flex text-customPurple">
            {interests
              .filter((val) => val.selected)
              .map((val) => (
                <div
                  key={val.title}
                  className="bg-customPurpleLight m-2 p-4 rounded-full px-6"
                >
                  <p>{val.title}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
