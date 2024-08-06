import { AVATARS } from '../../../Shared/Constants';

export type AvatarProps = {
  imageSrc: HTMLImageElement['src'];
  alt: HTMLImageElement['alt'];
  isSelected: boolean;
  name: (typeof AVATARS)[number]['name'];
  onAvatarPress: (name: (typeof AVATARS)[number]['name']) => void;
};
