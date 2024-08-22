import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import GenderCardComponent from '../../Components/Molecules/GenderCardComponent';
import { Female, Male, ROUTES_CONFIG, STRING } from '../../Shared/Constants';
import CustomButton from '../../Components/Atoms/CustomButton';
import { RootState } from '../../Store';
import { updateUserData } from '../../Store/User';
import { auth, storage } from '../../Utils/firebaseConfig';
import { createUser } from '../../Utils/firebaseStore';

function AddGender() {
  // redux use
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state);

  // state use
  const [selectedGender, setSelectedGender] = useState<
    'Male' | 'Female' | null
  >(user.gender);

  // navigate use
  const navigate = useNavigate();

  // functions
  const handleSelectedGender = useCallback((gender: 'Male' | 'Female') => {
    setSelectedGender(() => gender);
  }, []);

  const handleSubmit = async () => {
    if (selectedGender === null) {
      toast('Please select your gender.');
      return;
    }
    dispatch(updateUserData({ gender: selectedGender }));
    const {
      user: { uid },
    } = await createUserWithEmailAndPassword(auth, user.email, user.password!);

    let url = '';
    if (/avatar+/.test(user.photo)) {
      const reference = ref(storage, `media/Avatars/${user.photo}.jpg`);
      url = await getDownloadURL(reference);
    } else {
      const reference = ref(storage, `media/profilePictures/${uid}/photo`);

      await uploadString(reference, user.photo, 'data_url');
      url = await getDownloadURL(reference);
    }

    await createUser(uid, {
      ...user,
      id: uid,
      photo: url,
      finger: false,
      gender: selectedGender,
      healthData: [],
      notifications: [],
      storiesWatched: [],
    });

    navigate(ROUTES_CONFIG.DETAILS_COMPLETED.path);
  };

  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl font-medium mt-1 max-w-[70%] text-center">
        {STRING.ADD_GENDER.heading}
      </p>
      <div className="flex mt-12">
        <GenderCardComponent
          title={STRING.ADD_GENDER.male}
          icon={Male}
          isSelected={selectedGender === 'Male'}
          setSelectedGender={handleSelectedGender}
        />
        <GenderCardComponent
          title={STRING.ADD_GENDER.female}
          icon={Female}
          isSelected={selectedGender === 'Female'}
          setSelectedGender={handleSelectedGender}
        />
      </div>
      <p className="text-xl text-gray-300 mt-6 w-[70%] text-center">
        {STRING.ADD_GENDER.description}
      </p>
      <div className="w-[60%] mb-12 mt-24">
        <CustomButton
          text={STRING.ADD_GENDER.submitButton}
          onPress={handleSubmit}
        />
      </div>
    </div>
  );
}

export default AddGender;
