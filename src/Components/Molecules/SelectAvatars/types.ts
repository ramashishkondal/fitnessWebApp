import { AVATARS } from '../../../Shared/Constants';

export type SelectAvatarsProps = {
  setProfilePicture: React.Dispatch<React.SetStateAction<string>>;
  selectedAvatar: (typeof AVATARS)[number]['name'];
};
