import { useSelector } from 'react-redux';
import React, { MouseEventHandler, useEffect, useMemo, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
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

import { UserFromFirebaseDb } from '../../../Shared/user';
import { db, firebaseDB } from '../../../Utils/firebaseConfig';
import PostDetails from '../../Organisms/PostDetails';
import AddComment from '../AddComment';

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
  const [modalType, setModalType] = useState<'postInfo' | 'addComment' | null>(
    null
  );
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
  const handleLikePressed: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
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
    setModalType(null);
  };
  return (
    <>
      <CustomModal
        isModalShown={modalType !== null}
        closeModal={closePostModal}
      >
        {modalType === 'postInfo' ? (
          <PostDetails
            postId={postId!}
            caption={caption}
            comments={comments}
            postCreatedON={postCreatedON}
            postedPhoto={postedPhoto}
            userData={userData!}
            postByUserId={postByUserId}
          />
        ) : (
          <AddComment postId={postId!} closeModal={() => setModalType(null)} />
        )}
      </CustomModal>
      <button
        type="button"
        className="my-8 rounded-md flex flex-col justify-center items-center py-4 px-4 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-[1.02]"
        onClick={() => setModalType('postInfo')}
      >
        {userData &&
          (<UserInfoCard userInfo={userData} createdOn={postCreatedON} /> || (
            <Skeleton enableAnimation />
          ))}
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
            <button
              type="button"
              className="flex ml-4"
              onClick={(e) => {
                e.stopPropagation();
                setModalType('addComment');
              }}
            >
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
