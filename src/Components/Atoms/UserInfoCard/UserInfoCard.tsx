import { useMemo } from 'react';
import { Timestamp } from 'firebase/firestore';
import { UserInfoCardProps } from './types';
import { DefaultUser } from '../../../Shared/Constants';
import { getTimePassed } from '../../../Utils/commonUtils';

function UserInfoCard({
  userInfo: { userPhoto, userName },
  createdOn,
}: Readonly<UserInfoCardProps>) {
  // constants
  const timePassed = useMemo(() => {
    if (createdOn) {
      return getTimePassed(
        Timestamp.fromMillis(createdOn.seconds * 1000)
          .toDate()
          .getTime()
      );
    }
    return null;
  }, [createdOn]);

  return (
    <div className="flex w-full items-center my-4 mx-1 text-left">
      <img
        src={userPhoto === '' ? DefaultUser : userPhoto}
        className="size-14 rounded-full object-cover"
        alt="user "
      />
      <div className="mx-4">
        <p className="w-72 overflow-hidden text-ellipsis whitespace-nowrap">
          {userName}
        </p>
        {timePassed && (
          <p className="text-customGray300 font-semibold text-xs">
            {timePassed}
          </p>
        )}
      </div>
    </div>
  );
}

export default UserInfoCard;
