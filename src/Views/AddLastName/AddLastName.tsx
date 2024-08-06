import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../Components/Atoms/CustomButton';
import CustomTextInput from '../../Components/Atoms/CustomTextInput';
import { updateUserData } from '../../Store/User';
import { ROUTES_CONFIG, STRING } from '../../Shared/Constants';
import { isValidName } from '../../Utils/checkValidity';
import { RootState } from '../../Store';

function AddEmail() {
  // redux use
  const { lastName: userLastName } = useSelector(
    (state: RootState) => state.user
  );
  const [lastName, setLastName] = useState(userLastName);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!lastName) {
      return;
    }
    if (!isValidName(lastName)) {
      return;
    }

    dispatch(updateUserData({ lastName }));
    navigate(ROUTES_CONFIG.PHOTO.path);
  };

  return (
    <div className="flex flex-1 items-center flex-col justify-center self-center mb-16">
      <p className="text-3xl font-medium mb-6">
        {STRING.ADD_LAST_NAME.heading}
      </p>
      <div className="flex flex-1 flex-col justify-center w-[60%]">
        <div>
          <CustomTextInput
            placeholder={STRING.ADD_LAST_NAME.lastNamePlaceholder}
            value={lastName}
            maxLength={30}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
        <div className="mt-32">
          <CustomButton text="Continue" onPress={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default AddEmail;
