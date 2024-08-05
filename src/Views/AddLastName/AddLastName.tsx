import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../Components/Atoms/CustomButton';
import CustomTextInput from '../../Components/Atoms/CustomTextInput';
import { updateUserData } from '../../Store/User';
import { ROUTES_CONFIG } from '../../Shared/Constants';

function AddEmail() {
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleEmailSubmit = () => {
    dispatch(updateUserData({ lastName }));
  };

  return (
    <div className="flex flex-1 items-center flex-col justify-center self-center mb-16">
      <p className="text-3xl font-medium mb-6">What is your last name?</p>
      <div className="flex flex-1 flex-col justify-center w-[60%]">
        <div>
          <CustomTextInput
            placeholder="Enter your last name"
            value={lastName}
            maxLength={30}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="mt-32">
          <CustomButton text="Continue" onPress={handleEmailSubmit} />
        </div>
      </div>
    </div>
  );
}

export default AddEmail;
