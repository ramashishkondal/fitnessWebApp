import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import CustomButton from '../../Components/Atoms/CustomButton';
import CustomTextInput from '../../Components/Atoms/CustomTextInput';
import { updateUserData } from '../../Store/User';
import { ROUTES_CONFIG, STRING } from '../../Shared/Constants';
import { isValidName } from '../../Utils/checkValidity';
import { RootState } from '../../Store';

function AddFirstName() {
  // redux use
  const dispatch = useDispatch();
  const { firstName: userFirstName } = useSelector(
    (state: RootState) => state.user
  );

  // state use
  const [firstName, setFirstName] = useState(userFirstName);

  // navigation use
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!firstName) {
      toast.error('Please enter your first name.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
      return;
    }
    if (!isValidName(firstName)) {
      toast.error('Invalid first name.', {
        position: 'top-right',
      });
      return;
    }
    toast.dismiss();
    dispatch(updateUserData({ firstName }));
    navigate(ROUTES_CONFIG.LAST_NAME.path);
  };
  return (
    <div className="flex flex-1 items-center flex-col justify-center self-center mb-16">
      <p className="text-3xl font-medium mb-6">
        {STRING.ADD_FIRST_NAME.heading}
      </p>
      <div className="flex flex-1 flex-col justify-center w-[60%]">
        <div>
          <CustomTextInput
            placeholder={STRING.ADD_FIRST_NAME.firstNamePlaceholder}
            value={firstName}
            maxLength={30}
            onChange={(e) => {
              setFirstName(e.target.value);
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

export default AddFirstName;
