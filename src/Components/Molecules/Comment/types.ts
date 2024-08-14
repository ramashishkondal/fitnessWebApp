import { Timestamp } from 'firebase/firestore';

export type CommentProps = {
  text: string;
  commentCreatedOn: Timestamp;
  userId: string;
};
