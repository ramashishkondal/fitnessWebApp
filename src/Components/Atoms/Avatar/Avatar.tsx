import clsx from 'clsx';
import { AvatarProps } from './types';

function Avatar({
  imageSrc,
  alt,
  isSelected,
  onAvatarPress,
  name,
}: Readonly<AvatarProps>) {
  const handleOnClick = () => {
    onAvatarPress(name);
  };
  return (
    <button
      type="button"
      className="my-4 mx-4 rounded-full"
      onClick={handleOnClick}
    >
      <img
        src={imageSrc}
        draggable={false}
        className={clsx(
          'size-24 rounded-full ring-4',
          isSelected ? 'ring-customPurple' : 'ring-gray-300'
        )}
        alt={alt}
      />
    </button>
  );
}

export default Avatar;
