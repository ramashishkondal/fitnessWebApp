import { CustomButtonProps } from './types';

function CustomButton({ text, onPress }: Readonly<CustomButtonProps>) {
  return (
    <button
      type="button"
      className="flex flex-1 rounded-3xl w-[100%] justify-center items-center font-semibold bg-customPurple py-3 text-white text-lg px-3"
      onClick={onPress}
    >
      {text}
    </button>
  );
}

export default CustomButton;
