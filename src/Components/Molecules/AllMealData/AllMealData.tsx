import { useSelector } from 'react-redux';
import { RootState } from '../../../Store';
import MealData from '../../Atoms/MealData';
import { getCaloriesOfFood } from '../../../Utils/commonUtils';
import { Close } from '../../../Shared/Constants';
import { storeMealData } from '../../../Utils/firebaseStore';

function AllMealData() {
  // redux use
  const { breakfast, dinner, lunch, snack } = useSelector(
    (state: RootState) => state.meal
  );
  const { id } = useSelector((state: RootState) => state.user);
  if (
    breakfast.length === 0 &&
    dinner.length === 0 &&
    lunch.length === 0 &&
    snack.length === 0
  ) {
    return (
      <div className="flex flex-1 border mx-4 rounded-md justify-center items-center">
        <p>No meal data available.</p>
      </div>
    );
  }

  // functions
  const handleDeleteBreakfast = () => {
    storeMealData(id!, { breakfast: [], dinner, lunch, snack });
  };
  const handleDeleteSnack = () => {
    storeMealData(id!, { breakfast, dinner, lunch, snack: [] });
  };
  const handleDeleteLunch = () => {
    return () => storeMealData(id!, { breakfast, dinner, lunch: [], snack });
  };
  const handleDeleteDinner = () => {
    storeMealData(id!, { breakfast, dinner: [], lunch, snack });
  };

  return (
    <div className="flex flex-1 mx-4 shadow-lg rounded-md">
      {breakfast.length > 0 && (
        <div className="flex flex-1 flex-col rounded-md p-2 m-4 max-h-[600px] overflow-y-auto">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-3xl">Breakfast</p>
            <button
              type="button"
              className="size-10"
              onClick={handleDeleteBreakfast}
            >
              <img src={Close} alt="close" />
            </button>
          </div>
          {breakfast.map((meal) => (
            <MealData
              calories={getCaloriesOfFood(meal)}
              id={meal.id}
              name={meal.name}
              serving_size_g={meal.serving_size_g}
              key={meal.id}
            />
          ))}
        </div>
      )}
      {snack.length > 0 && (
        <div className="flex flex-1 flex-col rounded-md p-2 m-4 max-h-[600px] overflow-y-auto">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-3xl">Snack</p>
            <button
              type="button"
              className="size-10"
              onClick={handleDeleteSnack}
            >
              <img src={Close} alt="close" />
            </button>
          </div>
          {snack.map((meal) => (
            <MealData
              calories={getCaloriesOfFood(meal)}
              id={meal.id}
              name={meal.name}
              serving_size_g={meal.serving_size_g}
              key={meal.id}
            />
          ))}
        </div>
      )}
      {lunch.length > 0 && (
        <div className="flex flex-1 flex-col rounded-md p-2 m-4 max-h-[600px] overflow-y-auto">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-3xl">Lunch</p>
            <button
              type="button"
              className="size-10"
              onClick={handleDeleteLunch}
            >
              <img src={Close} alt="close" />
            </button>
          </div>
          {lunch.map((meal) => (
            <MealData
              calories={getCaloriesOfFood(meal)}
              id={meal.id}
              name={meal.name}
              serving_size_g={meal.serving_size_g}
              key={meal.id}
            />
          ))}
        </div>
      )}
      {dinner.length > 0 && (
        <div className="flex flex-1 flex-col rounded-md p-2 m-4 max-h-[600px] overflow-y-auto">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-3xl">Dinner</p>
            <button
              type="button"
              className="size-10"
              onClick={handleDeleteDinner}
            >
              <img src={Close} alt="close" />
            </button>
          </div>
          {dinner.map((meal) => (
            <MealData
              calories={getCaloriesOfFood(meal)}
              id={meal.id}
              name={meal.name}
              serving_size_g={meal.serving_size_g}
              key={meal.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AllMealData;
