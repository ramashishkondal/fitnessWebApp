import { MealDataProps } from './types';

function MealData({
  id,
  name,
  serving_size_g,
  calories,
}: Readonly<MealDataProps>) {
  return (
    <div
      key={id}
      className="flex flex-1 pl-8 py-3 justify-between px-4 border-b-2 font-medium"
    >
      <div>
        <p className="text-wrap max-w-32">{name}</p>
        <p className="font-light text-customGray400">{serving_size_g} grams</p>
      </div>
      <p>{calories} cals</p>
    </div>
  );
}

export default MealData;
