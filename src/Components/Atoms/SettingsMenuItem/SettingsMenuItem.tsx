import { memo } from 'react';
import { SettingsMenuItemProps } from './types';

function SettingsMenuItem({ text, onClick }: Readonly<SettingsMenuItemProps>) {
  return (
    <button
      type="button"
      className="w-full text-left py-2 px-2 my-0.5 rounded-md hover:bg-customGray200"
      onClick={onClick}
    >
      <p>{text}</p>
    </button>
  );
}

export default memo(SettingsMenuItem);
