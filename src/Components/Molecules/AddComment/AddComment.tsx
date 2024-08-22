import { useSelector } from 'react-redux';
import EmojiPicker from 'emoji-picker-react';
import { ChangeEventHandler, useState } from 'react';
import { Timestamp } from 'firebase/firestore';
import { RootState } from '../../../Store';
import { Smiley } from '../../../Shared/Constants';
import CustomButton from '../../Atoms/CustomButton';
import { storePostComment } from '../../../Utils/firebaseStore';
import { AddCommentProps } from './types';

function AddComment({ postId, closeModal }: Readonly<AddCommentProps>) {
  // redux use
  const { photo, id } = useSelector((state: RootState) => state.user);

  // state use
  const [comment, setComment] = useState('');
  const [isEmojiPickerShown, setEmojiPickerShown] = useState(false);

  // functions
  const handleCommentChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setComment(event.target.value);
  };
  const handlePostComment = () => {
    storePostComment(postId, {
      comment,
      createdOn: Timestamp.fromDate(new Date()),
      userId: id!,
    }).finally(closeModal);
  };
  return (
    <>
      <div>
        <p className="text-3xl font-medium my-2">Create comment</p>
        <div className="flex my-4">
          <div className="size-14">
            <img src={photo} alt="user" className="size-12 rounded-full" />
          </div>
          <input
            type="text"
            value={comment}
            className=" ml-2 px-1 w-full"
            placeholder="Add a comment"
            onChange={handleCommentChange}
          />
        </div>
      </div>
      <div className="absolute z-20 shadow-md shadow-slate-300 rounded-lg">
        <EmojiPicker
          open={isEmojiPickerShown}
          onEmojiClick={(e) => {
            setComment(comment + e.emoji);
          }}
        />
      </div>
      {isEmojiPickerShown && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          onClick={() => setEmojiPickerShown(false)}
          aria-hidden="true"
        />
      )}
      <div className="p-48" />
      <div className="mt-4 border-t-2 py-4">
        <div className="flex justify-between items-center">
          <button type="button" onClick={() => setEmojiPickerShown(true)}>
            <img src={Smiley} alt="emoji picker" className="size-10" />
          </button>
          <div className="w-24">
            <CustomButton text="Post" onPress={handlePostComment} />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddComment;
