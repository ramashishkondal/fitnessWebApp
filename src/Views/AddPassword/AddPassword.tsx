import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import CustomButton from '../../Components/Atoms/CustomButton';
import CustomTextInput from '../../Components/Atoms/CustomTextInput';
import { updateUserData } from '../../Store/User';
import { ROUTES_CONFIG } from '../../Shared/Constants';
import { isValidPassword } from '../../Utils/checkValidity';

function AddPassword() {
  // state use
  const [password, setPassword] = useState('');

  // navigation use
  const navigate = useNavigate();

  // redux use
  const dispatch = useDispatch();
  const handleEmailSubmit = () => {
    if (!isValidPassword.lengthCheck(password)) {
      return;
    }
    dispatch(updateUserData({ password }));
    navigate(ROUTES_CONFIG.FIRST_NAME.path);
  };
  return (
    <div className="flex flex-1 items-center flex-col justify-center self-center mb-16">
      <p className="text-3xl font-medium mb-6">Now lets setup your password</p>
      <div className="flex flex-1 flex-col justify-center w-[60%]">
        <div>
          <CustomTextInput
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-1 items-center mt-6">
          <div
            className={clsx(
              'w-4 h-4 rounded-[4px]  mx-1',
              isValidPassword.lengthCheck(password)
                ? 'bg-purple-400'
                : 'bg-slate-400'
            )}
          />
          <p className="text-gray-600 ">Minimum 6 characters</p>
        </div>
        <div className="mt-32">
          <CustomButton text="Continue" onPress={handleEmailSubmit} />
        </div>
      </div>
    </div>
  );
}

export default AddPassword;
