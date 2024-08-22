import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import { useSelector } from 'react-redux';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { auth } from '../../../Utils/firebaseConfig';
import CustomButton from '../../Atoms/CustomButton';
import { RootState } from '../../../Store';
import { ResetPasswordProps } from './types';

function ResetPassword({ closeModal }: Readonly<ResetPasswordProps>) {
  // redux use
  const { email } = useSelector((state: RootState) => state.user);

  // state use
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // functions
  const resetUserPassword = async () => {
    try {
      const user = auth.currentUser;
      const credential = EmailAuthProvider.credential(email, currentPassword);
      if (user) {
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
      }
    } catch {
      console.error('error updating the password');
    }
  };
  const handleSubmit = () => {
    resetUserPassword().finally(closeModal);
  };
  const handlePassword = (setName: Dispatch<SetStateAction<string>>) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
    };
  };

  return (
    <div className="px-4 py-8">
      <p className="text-3xl font-semibold text-center">Reset Password</p>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Enter current password"
          className="border w-96 mt-8 my-2 rounded-md p-3 text-wrap text-left resize-none"
          onChange={handlePassword(setCurrentPassword)}
        />
        <input
          type="text"
          placeholder="Enter new password"
          className="border w-96  my-2 rounded-md p-3 text-wrap text-left resize-none"
          onChange={handlePassword(setNewPassword)}
        />
      </div>
      <div className="mt-24 ">
        <CustomButton text="Submit" onPress={handleSubmit} />
      </div>
    </div>
  );
}

export default ResetPassword;
