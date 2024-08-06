import CustomCheckbox from '../../Atoms/CustomCheckbox';
import { GenderCardComponentProps } from './types';

function GenderCardComponent({
  icon,
  title,
  isSelected,
  setSelectedGender,
}: Readonly<GenderCardComponentProps>) {
  const handleCheckboxPress = () => {
    setSelectedGender(title);
  };
  return (
    <button
      type="button"
      className="flex flex-col justify-center items-center rounded-md mx-3 py-2 px-2 shadow-md"
      onClick={handleCheckboxPress}
    >
      <div className="flex flex-1">
        <div className=" flex flex-col items-center">
          <img src={icon} alt={title} className="size-32" draggable={false} />
          <p className="text-lg font-medium mt-2">{title}</p>
        </div>
        <div className="pr-1 pt-1">
          <CustomCheckbox checked={isSelected} onClick={handleCheckboxPress} />
        </div>
      </div>
    </button>
  );
}
export default GenderCardComponent;
