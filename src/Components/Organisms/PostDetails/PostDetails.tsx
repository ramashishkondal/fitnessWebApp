import { ChangeEventHandler, useState } from 'react';
import { Timestamp } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { PostDetailsProps } from './types';
import Comment from '../../Molecules/Comment';
import UserInfoCard from '../../Atoms/UserInfoCard';
import CustomTextInput from '../../Atoms/CustomTextInput';
import { GarbageCan, LeftArrow } from '../../../Shared/Constants';
import { deletePost, storePostComment } from '../../../Utils/firebaseStore';
import { RootState } from '../../../Store';

function PostDetails({
  postId,
  postedPhoto,
  userData,
  comments,
  caption,
  postCreatedON,
  postByUserId,
}: Readonly<PostDetailsProps>) {
  // state use
  const [comment, setComment] = useState('');

  // redux use
  const { id } = useSelector((state: RootState) => state.user);

  // functions
  const handleCommentChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setComment(event.target.value);
  };
  const handlePostComment = () => {
    storePostComment(postId, {
      comment,
      createdOn: Timestamp.fromDate(new Date()),
      userId: id!,
    });
  };
  const handlePostDelete = () => {
    deletePost(postId);
  };

  return (
    <div className="flex max-h-[750px] max-w-[900px] h-[700px]">
      <div className="bg-black flex flex-1 flex-col justify-center ">
        <img
          src={postedPhoto}
          alt="post"
          className="object-contain max-h-[100%] min-h-[60%]"
        />
      </div>
      <div className="mx-4 min-w-96 flex flex-1 flex-col">
        <div className="flex items-center">
          {userData && (
            <UserInfoCard userInfo={userData} createdOn={postCreatedON} />
          )}
          {postByUserId === id ? (
            <button
              type="button"
              className="size-10"
              onClick={handlePostDelete}
            >
              <img src={GarbageCan} alt="delete" />
            </button>
          ) : null}
        </div>
        <p className="text-left w-80 text-wrap">{caption}</p>
        <div className="flex border rounded-md justify-center items-center mt-4 mb-2">
          <CustomTextInput
            placeholder="Write a comment..."
            onChange={handleCommentChange}
          />
          <button type="button" onClick={handlePostComment}>
            <img
              src={LeftArrow}
              alt="post comment"
              className="size-6 -rotate-90 mr-2"
            />
          </button>
        </div>
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
            <p className="text-customGray300 mt-8">No comments posted yet.</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
