import { Timestamp } from 'firebase/firestore';
import { Post } from '../../../Shared/user';

export type PostDetailsProps = {
  postId: string;
  postedPhoto: string;
  userData: { userName: string; userPhoto: string };
  comments: Post['comments'];
  caption: string;
  postCreatedON: Timestamp;
  postByUserId: string;
};
