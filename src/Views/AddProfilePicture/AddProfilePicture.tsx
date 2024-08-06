import { ChangeEventHandler, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../Components/Atoms/CustomButton';
import SelectAvatars from '../../Components/Molecules/SelectAvatars';
import { AVATARS, Close, ROUTES_CONFIG, STRING } from '../../Shared/Constants';
import { updateUserData } from '../../Store/User';
import { RootState } from '../../Store';

function AddProfilePicture() {
  // redux use
  const dispatch = useDispatch();
  const { photo } = useSelector((state: RootState) => state.user);

  // state use
  const [profilePictureType, setProfilePictureType] = useState<
    'avatar' | 'customImage'
  >(photo.includes('avatar') || !photo ? 'avatar' : 'customImage');
  const [profilePicture, setProfilePicture] = useState<string>(photo);

  // ref use
  const inputFileRef = useRef<HTMLInputElement>(null);

  // navigation use
  const navigate = useNavigate();

  // functions
  const handleOnPressAddPhoto = () => {
    inputFileRef.current?.click();
  };
  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setProfilePictureType('customImage');
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          if (typeof e.target.result === 'string')
            setProfilePicture(e.target.result);
        }
      };

      if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file);
      }
    }
  };
  const handleSubmit = () => {
    if (!profilePicture) {
      return;
    }
    dispatch(updateUserData({ photo: profilePicture }));
    navigate(ROUTES_CONFIG.PREFERENCES.path);
  };
  const handleCustomImageClose = () => {
    setProfilePictureType('avatar');
    setProfilePicture('');
  };
  return (
    <div className="flex flex-1 flex-col items-center">
      {profilePictureType === 'customImage' && profilePicture ? (
        <div className="relative">
          <img
            src={profilePicture}
            alt="profile"
            className="size-24 rounded-full my-4 object-none shadow-lg "
          />
          <button
            type="button"
            className="absolute top-4 right-2 bg-customGray400 rounded-full size-6"
            onClick={handleCustomImageClose}
          >
            <img src={Close} alt="close" draggable={false} />
          </button>
        </div>
      ) : (
        <SelectAvatars
          setProfilePicture={setProfilePicture}
          selectedAvatar={profilePicture as (typeof AVATARS)[number]['name']}
        />
      )}
      <p className="text-4xl font-medium mt-12">
        {STRING.ADD_PROFILE_PICTURE.heading}
      </p>
      <p className="text-2xl text-gray-300 mt-1 w-[70%] text-center">
        {profilePictureType === 'avatar'
          ? STRING.ADD_PROFILE_PICTURE.description
          : STRING.ADD_PROFILE_PICTURE.description_2}
      </p>
      <input
        type="file"
        className="hidden"
        ref={inputFileRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg"
        multiple={false}
      />
      <button type="button" className="mt-10" onClick={handleOnPressAddPhoto}>
        <p className="text-xl text-customPurple font-medium ">
          {profilePictureType === 'avatar'
            ? STRING.ADD_PROFILE_PICTURE.addPhotoButton
            : STRING.ADD_PROFILE_PICTURE.changePhotoButton}
        </p>
      </button>
      <div className="w-[40%] my-12">
        <CustomButton
          text={STRING.ADD_PROFILE_PICTURE.submitButton}
          onPress={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddProfilePicture;
