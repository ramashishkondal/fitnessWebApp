import { CustomButtonProps } from './types';

function CustomButton({ text, onPress }: Readonly<CustomButtonProps>) {
  return (
    <button
      type="button"
      className="rounded-md bg-blue-300 py-2 text-white my-4"
      onClick={onPress}
    >
      {text}
    </button>
  );
}

export default CustomButton;
