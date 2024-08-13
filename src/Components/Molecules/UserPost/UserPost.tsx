import { useSelector } from 'react-redux';
import React, { useMemo } from 'react';
import { Timestamp } from 'firebase/firestore';
import { PostProps } from './types';
import {
  CommentDialog,
  HeartLiked,
  HeartUnLiked,
} from '../../../Shared/Constants';
import { RootState } from '../../../Store';
import { updateLikes } from '../../../Utils/firebaseStore';
import UserInfoCard from '../../Atoms/UserInfoCard';
import { getTimePassed } from '../../../Utils/commonUtils';

function UserPost({
  Post: {
    caption,
    comments,
    likedByUsersId,
    photo: postedPhoto,
    postId,
    userId: postedByUserId,
    createdOn,
  },
}: Readonly<PostProps>) {
  // redux use
  const { id: userId } = useSelector((state: RootState) => state.user);

  // memo use
  const isLikedByUser = useMemo(
    () => likedByUsersId.includes(userId!),
    [userId, likedByUsersId]
  );

  // functions
  const handleLikePressed = () => {
    if (isLikedByUser) {
      updateLikes(
        userId!,
        postId!,
        likedByUsersId.filter((id) => id !== userId)
      );
      return;
    }
    updateLikes(userId!, postId!, likedByUsersId.concat(userId!));
  };

  return (
    <div className="my-4 border rounded-md flex flex-col justify-center items-center py-4 px-4">
      <UserInfoCard
        userId={postedByUserId}
        timeAgo={getTimePassed(
          Timestamp.fromMillis(createdOn.seconds * 1000)
            .toDate()
            .getTime()
        )}
      />
      <div>
        <p className="text-wrap max-w-32">{caption}</p>
        <img
          src={postedPhoto}
          alt="post"
          className="w-[600px] object-cover rounded-md"
        />

        <div className="flex items-center p-2">
          <button type="button" className="flex" onClick={handleLikePressed}>
            {isLikedByUser ? (
              <img
                src={HeartLiked}
                alt="like"
                className="size-6"
                draggable={false}
              />
            ) : (
              <img
                src={HeartUnLiked}
                alt="like"
                className="size-6"
                draggable={false}
              />
            )}
            <p className="ml-2">{likedByUsersId.length}</p>
          </button>
          <button type="button" className="flex ml-4">
            <img
              src={CommentDialog}
              alt="comment"
              className="size-6"
              draggable={false}
            />
            <p className="ml-2">{comments.length}</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(UserPost);
