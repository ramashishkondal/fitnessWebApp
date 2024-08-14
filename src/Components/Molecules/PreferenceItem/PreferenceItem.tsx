import { useCallback } from 'react';
import clsx from 'clsx';
import CustomCheckbox from '../../Atoms/CustomCheckbox';
import { PreferenceItemProps } from './types';

function PreferenceItem({
  title,
  isSelected,
  setIsItemSelected,
}: Readonly<PreferenceItemProps>) {
  const handleCheckBoxPress = useCallback(() => {
    setIsItemSelected(title);
  }, [setIsItemSelected, title]);

  return (
    <button
      type="button"
      className={clsx(
        'flex w-full items-center justify-between border p-4 rounded-md my-3 max-w-[80%] hover:border-gray-500',
        isSelected
          ? 'text-customPurple border-customPurple font-medium'
          : ' border-gray-300'
      )}
      onClick={handleCheckBoxPress}
    >
      <p className="font-normal text-lg">{title}</p>
      <CustomCheckbox checked={isSelected} onClick={handleCheckBoxPress} />
    </button>
  );
}

export default PreferenceItem;
