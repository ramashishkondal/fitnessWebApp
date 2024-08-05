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
      className="p-3 bg-white my-2 placeholder:text-gray-500 font-light rounded-lg w-[100%] border border-gray-300 py-3"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    />
  );
}

export default CustomTextInput;
