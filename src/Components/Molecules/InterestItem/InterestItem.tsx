import clsx from 'clsx';
import { InterestItemProps } from './types';

function InterestItem({
  icon,
  isSelected,
  title,
  setItemSelected,
}: InterestItemProps) {
  const handleClickPressed = () => {
    setItemSelected(title);
  };
  return (
    <div className="flex flex-col items-center justify-center my-2">
      <button
        type="button"
        className={clsx(
          ' size-24 mx-6 my-4 p-6 rounded-full',
          isSelected ? 'bg-customPurple' : 'bg-gray-100'
        )}
        onClick={handleClickPressed}
      >
        <img src={icon} alt={title} draggable={false} />
      </button>
      <p>{title}</p>
    </div>
  );
}

export default InterestItem;
