import { useDispatch } from 'react-redux';
import { MouseEventHandler } from 'react';
import { LogOutProps } from './types';
import { updateUserData } from '../../../Store/User';
import { auth } from '../../../Utils/firebaseConfig';

function LogOut({ closeModal }: Readonly<LogOutProps>) {
  // redux use
  const dispatch = useDispatch();

  // functions
  const onLogoutPressed: MouseEventHandler<HTMLButtonElement> = () => {
    const handleLogOut = async () => {
      try {
        await auth.signOut();
        dispatch(updateUserData({ id: null }));
      } catch (error) {
        // console.log('failed loggin out ', error);
      }
    };
    handleLogOut();
  };

  return (
    <div className="mx-10 my-5">
      <p className="font-semibold text-2xl">Log out</p>
      <p className="my-9">Are you sure you want to logout?</p>
      <div className="flex justify-evenly">
        <button
          type="button"
          onClick={closeModal}
          className="px-6 py-1 rounded-md bg-customGray300"
        >
          NO
        </button>
        <button
          type="button"
          onClick={onLogoutPressed}
          className="px-6 py-1 rounded-md bg-customPurpleLight"
        >
          YES
        </button>
      </div>
    </div>
  );
}

export default LogOut;
