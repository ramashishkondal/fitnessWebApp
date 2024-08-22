import { ChangeEventHandler, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmojiPicker from 'emoji-picker-react';
import { Timestamp } from 'firebase/firestore';
import { PostSign, Smiley } from '../../../Shared/Constants';
import CustomModal from '../CustomModal';
import DragAndDropFiles from '../DragAndDropFiles';
import { RootState } from '../../../Store';
import CustomButton from '../../Atoms/CustomButton';
import { storePost } from '../../../Utils/firebaseStore';
import { setLoading } from '../../../Store/Loader';

function AddPost() {
  // state use
  const [caption, setCaption] = useState('');
  const [isAddPostModalShown, setIsAddPostModalShown] = useState(false);
  const [isEmojiPickerShown, setEmojiPickerShown] = useState(false);
  const [postImage, setPostImage] = useState('');

  // redux use
  const dispatch = useDispatch();
  const { photo, id } = useSelector((state: RootState) => state.user);

  // functions

  const showAddStoryModal = () => {
    setIsAddPostModalShown(true);
  };
  const closeAddPostModal = () => {
    setIsAddPostModalShown(false);
  };
  const showEmojiPicker = () => {
    setEmojiPickerShown(true);
  };
  const handleStorePost = () => {
    dispatch(setLoading(true));
    storePost({
      caption,
      comments: [],
      createdOn: Timestamp.fromDate(new Date()),
      likedByUsersId: [],
      photo: postImage,
      userId: id!,
      userName: '',
      userPhoto: '',
    })
      .then(() => setPostImage(''))
      .finally(() => dispatch(setLoading(false)));
    setEmojiPickerShown(false);
  };
  const handleCaptionChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCaption(e.target.value);
  };
  return (
    <>
      <CustomModal
        isModalShown={isAddPostModalShown}
        closeModal={closeAddPostModal}
      >
        <div>
          <p className="text-3xl font-medium my-2">Create a post</p>
          <div className="flex my-4 ">
            <div className="size-14">
              <img src={photo} alt="user" className="size-12 rounded-full" />
            </div>
            <input
              type="text"
              value={caption}
              className=" ml-2 px-1 w-full"
              placeholder="Add a caption"
              onChange={handleCaptionChange}
            />
          </div>
        </div>
        <div className="absolute z-20 shadow-md shadow-slate-300 rounded-lg">
          <EmojiPicker
            open={isEmojiPickerShown}
            onEmojiClick={(e) => {
              setCaption(caption + e.emoji);
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
        <DragAndDropFiles
          fileTypesAllowed="image"
          photo={postImage}
          setPhoto={setPostImage}
        />
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <button type="button" onClick={showEmojiPicker}>
              <img src={Smiley} alt="emoji picker" className="size-10" />
            </button>
            <div className="w-24">
              <CustomButton text="Post" onPress={handleStorePost} />
            </div>
          </div>
        </div>
      </CustomModal>
      <div className="relative">
        <button
          type="button"
          className="flex justify-center items-center size-14 p-3"
          onClick={showAddStoryModal}
        >
          <img src={PostSign} alt="add post" />
        </button>
      </div>
    </>
  );
}

export default AddPost;
