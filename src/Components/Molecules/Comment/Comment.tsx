import { useEffect, useState } from 'react';
import UserInfoCard from '../../Atoms/UserInfoCard';
import { CommentProps } from './types';
import { getUser } from '../../../Utils/firebaseStore';

function Comment({ text, commentCreatedOn, userId }: Readonly<CommentProps>) {
  const [commentedByUser, setCommentedByUser] = useState<{
    userName: string;
    userPhoto: string;
  }>();

  useEffect(() => {
    getUser(userId).then((userData) => {
      setCommentedByUser({
        userName: ` ${userData.firstName} ${userData.lastName}`,
        userPhoto: userData.photo,
      });
    });
  }, [userId]);
  if (!commentedByUser) {
    return null;
  }
  return (
    <div>
      <UserInfoCard createdOn={commentCreatedOn} userInfo={commentedByUser} />
      <p className="text-left ml-20 text-wrap -mt-3">{text}</p>
    </div>
  );
}

export default Comment;
