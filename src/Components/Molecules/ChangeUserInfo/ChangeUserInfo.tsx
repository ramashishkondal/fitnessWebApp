import { useSelector } from 'react-redux';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react';
import CustomTextInput from '../../Atoms/CustomTextInput';
import GenderCardComponent from '../GenderCardComponent';
import { Female, Male } from '../../../Shared/Constants';
import CustomButton from '../../Atoms/CustomButton';
import { RootState } from '../../../Store';
import { updateUserInfo } from '../../../Utils/firebaseStore';
import { ChangeUserInfoProps } from './types';

function ChangeUserInfo({ closeModal }: Readonly<ChangeUserInfoProps>) {
  // redux use
  const {
    gender: userGender,
    firstName: userFirstName,
    lastName: userLastName,
    id,
  } = useSelector((state: RootState) => state.user);

  // state use
  const [selectedGender, setSelectedGender] = useState<
    'Male' | 'Female' | null
  >(userGender);
  const [firstName, setFirstName] = useState(userFirstName);
  const [lastName, setLastName] = useState(userLastName);

  // functions
  const handleSelectedGender = useCallback((gender: 'Male' | 'Female') => {
    setSelectedGender(() => gender);
  }, []);
  const handleNameChange = (setName: Dispatch<SetStateAction<string>>) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    };
  };
  const handleSubmit = () => {
    if (id) {
      updateUserInfo(id, {
        firstName,
        lastName,
        gender: selectedGender,
      }).finally(closeModal);
    }
  };

  return (
    <div>
      <p className="text-3xl font-semibold my-2 mb-8 text-center">
        Change User Info
      </p>
      <div>
        <CustomTextInput
          placeholder="Fist Name"
          value={firstName}
          onChange={handleNameChange(setFirstName)}
        />
        <CustomTextInput
          placeholder="Last Name"
          value={lastName}
          onChange={handleNameChange(setLastName)}
        />
      </div>
      <div className="flex mt-10 mb-4">
        <GenderCardComponent
          icon={Male}
          title="Male"
          isSelected={selectedGender === 'Male'}
          setSelectedGender={handleSelectedGender}
        />
        <GenderCardComponent
          icon={Female}
          title="Female"
          isSelected={selectedGender === 'Female'}
          setSelectedGender={handleSelectedGender}
        />
      </div>
      <div className="mt-10 mb-4">
        <CustomButton text="Submit" onPress={handleSubmit} />
      </div>
    </div>
  );
}

export default ChangeUserInfo;
