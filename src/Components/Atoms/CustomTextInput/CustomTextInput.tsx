import { CustomTextInputProps } from './type';

function CustomTextInput({
  value,
  placeholder,
  onChange,
  onClick,
  onBlur,
  maxLength,
}: Readonly<CustomTextInputProps>) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      maxLength={maxLength}
      className="p-3 bg-white placeholder:text-gray-500 font-light w-[100%] py-2 focus:outline-none my-1"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    />
  );
}

export default CustomTextInput;
