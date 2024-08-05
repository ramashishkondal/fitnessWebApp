import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../Components/Atoms/CustomButton';
import CustomTextInput from '../../Components/Atoms/CustomTextInput';
import { updateUserData } from '../../Store/User';
import { ROUTES_CONFIG } from '../../Shared/Constants';
import { isValidName } from '../../Utils/checkValidity';

function AddFirstName() {
  const [firstName, setFirstName] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleEmailSubmit = () => {
    if (!isValidName(firstName)) {
      return;
    }
    dispatch(updateUserData({ firstName }));
    navigate(ROUTES_CONFIG.LAST_NAME.path);
  };
  return (
    <div className="flex flex-1 items-center flex-col justify-center self-center mb-16">
      <p className="text-3xl font-medium mb-6">What is your first name?</p>
      <div className="flex flex-1 flex-col justify-center w-[60%]">
        <div>
          <CustomTextInput
            placeholder="Enter your first name"
            value={firstName}
            maxLength={30}
            onChange={(e) => {
              setFirstName(e.target.value);
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

export default AddFirstName;
