import { useSelector } from 'react-redux';
import React, { useEffect, useMemo, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { PostProps } from './types';
import {
  CommentDialog,
  HeartLiked,
  HeartUnLiked,
} from '../../../Shared/Constants';
import { RootState } from '../../../Store';
import { updateLikes } from '../../../Utils/firebaseStore';
import UserInfoCard from '../../Atoms/UserInfoCard';
import CustomModal from '../CustomModal';
import Comment from '../Comment';
import { UserFromFirebaseDb } from '../../../Shared/user';
import { db, firebaseDB } from '../../../Utils/firebaseConfig';

function UserPost({
  Post: {
    caption,
    comments,
    likedByUsersId,
    photo: postedPhoto,
    postId,
    userId: postByUserId,
    createdOn: postCreatedON,
  },
}: Readonly<PostProps>) {
  // state use
  const [isPostModalShown, setIsPostModalShown] = useState(false);
  const [userData, setUserData] = useState<{
    userPhoto: string;
    userName: string;
  }>();

  // redux use
  const { id: userId } = useSelector((state: RootState) => state.user);

  // effect use
  useEffect(() => {
    const userDoc = doc(db, firebaseDB.collections.users, postByUserId);

    const unsubscribe = onSnapshot(userDoc, (snapshot) => {
      const userDataFromFirebase = snapshot.data() as UserFromFirebaseDb;
      if (userDataFromFirebase) {
        setUserData({
          userPhoto: userDataFromFirebase.photo,
          userName: `${userDataFromFirebase.firstName}  ${userDataFromFirebase.lastName}`,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [postByUserId]);

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
  const closePostModal = () => {
    setIsPostModalShown(false);
  };
  return (
    <>
      <CustomModal isModalShown={isPostModalShown} closeModal={closePostModal}>
        <div className="flex max-h-[750px] max-w-[900px] h-[700px]">
          <div className="bg-black flex flex-1 flex-col justify-center ">
            <img
              src={postedPhoto}
              alt="post"
              className="object-contain max-h-[100%]"
            />
          </div>
          <div className="mx-4 min-w-96 flex flex-1 flex-col">
            <div>
              {userData && (
                <UserInfoCard userInfo={userData} createdOn={postCreatedON} />
              )}
            </div>
            <p className="text-left w-80 text-wrap">{caption}</p>
            <p className="text-2xl font-semibold text-left mt-2">Comments</p>
            <div className="overflow-y-auto overflow-x-hidden">
              {comments.map((c) => (
                <Comment
                  key={c.createdOn.seconds}
                  userId={c.userId}
                  text={c.comment}
                  commentCreatedOn={c.createdOn}
                />
              ))}
              {comments.length === 0 ? (
                <p className="text-customGray300 mt-8">
                  No comments posted yet.
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </CustomModal>
      <button
        type="button"
        className="my-8 rounded-md flex flex-col justify-center items-center py-4 px-4 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-[1.02]"
        onClick={() => setIsPostModalShown(true)}
      >
        {userData && (
          <UserInfoCard userInfo={userData} createdOn={postCreatedON} />
        )}
        <div>
          <p className="text-wrap max-w-32 text-left my-3">{caption}</p>
          <img
            src={postedPhoto}
            alt="post"
            className="w-[600px] object-cover rounded-md "
          />
          <div className="flex items-center p-2 mt-2">
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
      </button>
    </>
  );
}

export default React.memo(UserPost);
