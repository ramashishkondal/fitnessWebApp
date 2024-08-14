import { useState } from 'react';
import { AVATARS } from '../../../Shared/Constants';
import Avatar from '../../Atoms/Avatar/Avatar';
import { SelectAvatarsProps } from './types';

function SelectAvatars({
  setProfilePicture,
  selectedAvatar,
}: Readonly<SelectAvatarsProps>) {
  // state use
  const [activeAvatar, setActiveAvatar] = useState<
    (typeof AVATARS)[number]['name'] | null
  >(selectedAvatar);

  // functions
  const handleActiveAvatarPress = (
    avatarName: (typeof AVATARS)[number]['name']
  ) => {
    setActiveAvatar(avatarName);
    setProfilePicture(avatarName);
  };
  return (
    <div>
      <div className="flex w-full mx-8 ">
        {AVATARS.map((val) => {
          return (
            <Avatar
              name={val.name}
              imageSrc={val.image}
              alt={val.name}
              key={val.image}
              isSelected={activeAvatar === val.name}
              onAvatarPress={handleActiveAvatarPress}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SelectAvatars;
