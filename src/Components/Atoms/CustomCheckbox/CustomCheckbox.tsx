import { useRef } from 'react';
import clsx from 'clsx';
import { Check } from '../../../Shared/Constants';
import { CustomCheckboxProps } from './types';

function CustomCheckbox({
  checked,
  onClick,
  onChange,
}: Readonly<CustomCheckboxProps>) {
  // ref use
  const checkboxInputRef = useRef<HTMLInputElement>(null);

  // functions
  const handleCheckBoxPress = () => {
    if (checkboxInputRef.current) {
      checkboxInputRef.current.click();
    }
  };
  return (
    <button type="button" onClick={handleCheckBoxPress}>
      <input
        type="checkbox"
        ref={checkboxInputRef}
        checked={checked}
        className="hidden"
        onClick={onClick}
        onChange={onChange}
      />
      <div
        className={clsx(
          'size-6 rounded-full flex justify-center items-center',
          checked ? 'bg-customPurple' : ' bg-customGray300'
        )}
      >
        {checked ? <img src={Check} alt="check" className="size-3" /> : null}
      </div>
    </button>
  );
}

export default CustomCheckbox;
