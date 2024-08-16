import { ChangeEventHandler, useRef, useState } from 'react';
import { PostSign } from '../../../Shared/Constants';
import CustomModal from '../CustomModal';
import DragAndDropFiles from '../DragAndDropFiles';

function AddPost() {
  // state use

  const [isAddPostModalShown, setIsAddPostModalShown] = useState(false);

  // ref use
  const inputFileRef = useRef<HTMLInputElement>(null);
  const storyFile = useRef<string>();

  // functions

  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          if (typeof e.target.result === 'string') {
            storyFile.current = e.target.result;
          }
        }
      };

      if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file);
      }
    }
  };
  const showAddStoryModal = () => {
    setIsAddPostModalShown(true);
  };
  const closeAddPostModal = () => {
    setIsAddPostModalShown(false);
  };
  return (
    <>
      <CustomModal
        isModalShown={isAddPostModalShown}
        closeModal={closeAddPostModal}
      >
        <DragAndDropFiles fileTypesAllowed="image/jpeg" />
      </CustomModal>
      <div className="relative">
        <input
          type="file"
          className="hidden"
          ref={inputFileRef}
          onChange={handleFileChange}
          accept="image/png, image/jpeg"
          multiple={false}
        />
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
