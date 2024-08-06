import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import GenderCardComponent from '../../Components/Molecules/GenderCardComponent';
import { Female, Male, ROUTES_CONFIG, STRING } from '../../Shared/Constants';
import CustomButton from '../../Components/Atoms/CustomButton';
import { RootState } from '../../Store';
import { updateUserData } from '../../Store/User';

function AddGender() {
  // redux use
  const dispatch = useDispatch();
  const { gender: userGender } = useSelector((state: RootState) => state.user);

  // state use
  const [selectedGender, setSelectedGender] = useState<
    'Male' | 'Female' | null
  >(userGender);

  // navigate use
  const navigate = useNavigate();

  // functions
  const handleSelectedGender = useCallback((gender: 'Male' | 'Female') => {
    setSelectedGender(() => gender);
  }, []);

  const handleSubmit = () => {
    if (selectedGender === null) {
      toast('Please select your gender.');
      return;
    }
    dispatch(updateUserData({ gender: selectedGender }));
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
