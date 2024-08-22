import { ChangeEventHandler, useRef, useState } from 'react';
import { Plus } from '../../../Shared/Constants';
import CustomModal from '../CustomModal';
import DragAndDropFiles from '../DragAndDropFiles';

function AddStory() {
  // state use
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isAddStoryModalShown, setIsAddStoryModalShown] = useState(false);
  const [fileTypesAllowed, setFileTypesAllowed] = useState<'image' | 'video'>(
    'image'
  );

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

  const showAddStoryModalImage = () => {
    setIsMenuShown(false);
    setFileTypesAllowed('image');
    setIsAddStoryModalShown(true);
  };
  const showAddStoryModalVideo = () => {
    setIsMenuShown(false);
    setFileTypesAllowed('video');
    setIsAddStoryModalShown(true);
  };
  const closeAddStoryModal = () => {
    setIsAddStoryModalShown(false);
  };

  return (
    <>
      <CustomModal
        isModalShown={isAddStoryModalShown}
        closeModal={closeAddStoryModal}
      >
        <DragAndDropFiles fileTypesAllowed={fileTypesAllowed} />
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
          className=" border bg-customGray200 flex justify-center items-center rounded-full size-14 p-3 hover:bg-customGray300"
          onClick={() => setIsMenuShown(true)}
        >
          <img src={Plus} alt="add story" />
        </button>
        {isMenuShown && (
          <>
            <div className="z-40 absolute border rounded-md  bg-customGray100 shadow-md mt-1 w-40 flex-col flex ">
              <button
                type="button"
                className="hover:bg-customGray200 p-2 rounded-md text-left"
                onClick={showAddStoryModalImage}
              >
                <p>Photo</p>
              </button>
              <button
                type="button"
                className="hover:bg-customGray200 p-2 rounded-md text-left"
                onClick={showAddStoryModalVideo}
              >
                <p>Video</p>
              </button>
            </div>
            <button
              type="button"
              className="fixed inset-0 flex
        cursor-default z-0"
              onClick={() => setIsMenuShown(false)}
            >
              <p />
            </button>
          </>
        )}{' '}
      </div>
    </>
  );
}

export default AddStory;
