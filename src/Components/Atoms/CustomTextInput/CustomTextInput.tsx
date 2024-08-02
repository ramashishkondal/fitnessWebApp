import { CustomTextInputProps } from './type';

function CustomTextInput({ placeholder }: Readonly<CustomTextInputProps>) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className=" border border-gray-300 p-2 bg-slate-100 my-2 placeholder:text-gray-500 font-light rounded-sm"
    />
  );
}

export default CustomTextInput;
