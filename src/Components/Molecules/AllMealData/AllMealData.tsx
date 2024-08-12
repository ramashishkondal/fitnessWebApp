import { useSelector } from 'react-redux';
import { RootState } from '../../../Store';

function AllMealData() {
  const { breakfast, dinner, lunch, snack } = useSelector(
    (state: RootState) => state.meal
  );

  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col border rounded-md p-2 mx-4">
        <p className="font-semibold text-xl">Breakfast</p>
        {breakfast.map((val) => (
          <div
            key={val.id}
            className="flex flex-1 pl-8 py-3 justify-between px-4 border-b-2 font-medium"
          >
            <div>
              <p>{val.name}</p>
              <p className="font-light text-customGray400">
                {val.serving_size_g} grams
              </p>
            </div>
            <p>{val.calories} cals</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllMealData;
