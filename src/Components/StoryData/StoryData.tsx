import { useState } from 'react';
import Stories from 'react-insta-stories';
import { DefaultUser } from '../../Shared/Constants';
import { StoryProps } from './types';
import CustomModal from '../Molecules/CustomModal';

function StoryData({ userPhoto, stories, userName }: Readonly<StoryProps>) {
  // state use
  const [isModalShown, setIsModalShown] = useState(false);

  // functions
  const handleStoryPressed = () => {
    setIsModalShown(true);
  };
  const closeModal = () => {
    setIsModalShown(false);
  };
  return (
    <>
      <CustomModal isModalShown={isModalShown} closeModal={closeModal}>
        <Stories
          stories={stories.map((val) => ({
            url: val.storyUrl,
            type: val.storyType.includes('video') ? 'video' : 'image',
            header: {
              profileImage: userPhoto === '' ? DefaultUser : userPhoto,
              heading: userName,
              subheading: '',
            },
          }))}
          defaultInterval={15000}
          width={432}
          height={768}
          storyStyles={{
            width: '430px',
          }}
        />
      </CustomModal>
      <button
        type="button"
        className=" p-2 rounded-full"
        onClick={handleStoryPressed}
      >
        <img
          src={userPhoto === '' ? DefaultUser : userPhoto}
          alt="story by user"
          className="rounded-full object-cover size-16"
        />
      </button>
    </>
  );
}

export default StoryData;
