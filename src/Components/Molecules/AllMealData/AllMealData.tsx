import { useSelector } from 'react-redux';
import { RootState } from '../../../Store';
import MealData from '../../Atoms/MealData';

function AllMealData() {
  const { breakfast, dinner, lunch, snack } = useSelector(
    (state: RootState) => state.meal
  );
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
  return (
    <div className="flex flex-1 border mx-4 rounded-md">
      {snack.length > 0 && (
        <div className="flex flex-1 flex-col border rounded-md p-2 m-4 max-h-96 overflow-y-auto">
          <p className="font-semibold text-xl">Snack</p>
          {snack.map((meal) => (
            <MealData
              calories={meal.calories}
              id={meal.id}
              name={meal.name}
              serving_size_g={meal.serving_size_g}
              key={meal.id}
            />
          ))}
        </div>
      )}
      {breakfast.length > 0 && (
        <div className="flex flex-1 flex-col border rounded-md p-2 m-4 max-h-96 overflow-y-auto">
          <p className="font-semibold text-xl">Breakfast</p>
          {breakfast.map((meal) => (
            <MealData
              calories={meal.calories}
              id={meal.id}
              name={meal.name}
              serving_size_g={meal.serving_size_g}
              key={meal.id}
            />
          ))}
        </div>
      )}
      {dinner.length > 0 && (
        <div className="flex flex-1 flex-col border rounded-md p-2 m-4 max-h-96 overflow-y-auto">
          <p className="font-semibold text-xl">Dinner</p>
          {dinner.map((meal) => (
            <MealData
              calories={meal.calories}
              id={meal.id}
              name={meal.name}
              serving_size_g={meal.serving_size_g}
              key={meal.id}
            />
          ))}
        </div>
      )}
      {lunch.length > 0 && (
        <div className="flex flex-1 flex-col border rounded-md p-2 m-4 max-h-96 overflow-y-auto">
          <p className="font-semibold text-xl">Lunch</p>
          {lunch.map((meal) => (
            <MealData
              calories={meal.calories}
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
