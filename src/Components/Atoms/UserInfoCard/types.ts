import { Timestamp } from 'firebase/firestore';

export type UserInfoCardProps = {
  userInfo: { userName: string; userPhoto: string };
  createdOn: Timestamp;
};
