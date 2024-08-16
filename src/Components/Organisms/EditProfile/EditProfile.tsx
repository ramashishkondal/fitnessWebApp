import { useSelector } from 'react-redux';
import { RootState } from '../../../Store';

function EditProfile() {
  // redux use
  const { firstName, lastName, email, gender, photo, preferences, interests } =
    useSelector((state: RootState) => state.user);
  return (
    <div className="text-2xl">
      <p className="mt-2">User Info</p>
      <div className="shadow-md rounded-md p-3 my-2">
        <div className="flex items-center">
          <img
            src={photo}
            alt="user profile"
            className="size-14 rounded-full"
          />
          <div className="ml-4">
            <div className="flex">
              <p>Name:</p>
              <p className="ml-2">{`${firstName} ${lastName}`}</p>
            </div>
            <div className="flex">
              <p>Email:</p>
              <p className="ml-2">{email}</p>
            </div>
            {gender && (
              <div className="flex">
                <p>Gender:</p>
                <p className="ml-2">{gender}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="mt-8">Preferences</p>
      <div className="shadow-md rounded-md p-3 my-2">
        <div className="flex text-customPurple">
          {preferences
            .filter((val) => val.selected)
            .map((val) => (
              <div
                key={val.title}
                className="bg-customPurpleLight m-2 p-4 rounded-full px-6"
              >
                <p>{val.title}</p>
              </div>
            ))}
        </div>
      </div>
      <p className="mt-8">Interests</p>
      <div className="shadow-md rounded-md p-3 my-2">
        <div className="flex text-customPurple">
          {interests
            .filter((val) => val.selected)
            .map((val) => (
              <div
                key={val.title}
                className="bg-customPurpleLight m-2 p-4 rounded-full px-6"
              >
                <p>{val.title}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
