import { ChangeEventHandler, useState } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { FoodBowl, foodData, SearchIcon } from '../../../Shared/Constants';
import CustomButton from '../../Atoms/CustomButton';
import CustomCheckbox from '../../Atoms/CustomCheckbox';
import { storeMealData } from '../../../Utils/firebaseStore';
import { RootState } from '../../../Store';
import { AddFoodItemsProps } from './types';

function AddFoodItems({ closeModal }: AddFoodItemsProps) {
  // state use
  const [mealTime, setMealTime] = useState({
    breakfast: false,
    snack: false,
    lunch: false,
    dinner: false,
  });
  const [allFoodData, setAllFoodData] = useState(
    foodData.map((val) => ({ ...val, isSelected: false }))
  );
  const [search, setSearch] = useState('');

  // redux use
  const { id } = useSelector((state: RootState) => state.user);
  const { breakfast, dinner, lunch, snack } = useSelector(
    (state: RootState) => state.meal
  );

  // functions
  const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = () => {
    const selectedFoodItems = allFoodData
      .filter((val) => val.isSelected)
      .map((val) => ({ ...val, id: uuidv4() }));
    const mealData = {
      breakfast: mealTime.breakfast
        ? breakfast.concat(selectedFoodItems)
        : breakfast,
      dinner: mealTime.dinner ? dinner.concat(selectedFoodItems) : dinner,
      lunch: mealTime.lunch ? lunch.concat(selectedFoodItems) : lunch,
      snack: mealTime.snack ? snack.concat(selectedFoodItems) : snack,
    };
    storeMealData(id!, mealData);
    closeModal();
  };
  return (
    <div className="flex flex-col justify-center">
      <img
        src={FoodBowl}
        alt="food bowl"
        className="size-20 self-center mt-3"
      />
      <p className="text-center text-2xl mt-3">Choose Food</p>
      <p className="mb-8 text-center mx-8">
        Select your meal and your foods that you consumed today.
      </p>
      <div className="flex my-4">
        <div className="flex flex-1 flex-col items-center">
          <CustomCheckbox
            checked={mealTime.snack}
            onChange={() =>
              setMealTime({ ...mealTime, snack: !mealTime.snack })
            }
          />
          <p className="mt-1">Snack</p>
        </div>
        <div className="flex flex-1 flex-col items-center">
          <CustomCheckbox
            checked={mealTime.breakfast}
            onChange={() =>
              setMealTime({ ...mealTime, breakfast: !mealTime.breakfast })
            }
          />
          <p className="mt-1">Breakfast</p>
        </div>
        <div className="flex flex-col flex-1 items-center">
          <CustomCheckbox
            checked={mealTime.lunch}
            onChange={() =>
              setMealTime({ ...mealTime, lunch: !mealTime.lunch })
            }
          />
          <p className="mt-1">Lunch</p>
        </div>
        <div className="flex flex-1 flex-col items-center">
          <CustomCheckbox
            checked={mealTime.dinner}
            onChange={() =>
              setMealTime({ ...mealTime, dinner: !mealTime.dinner })
            }
          />
          <p className="mt-1">Dinner</p>
        </div>
      </div>
      <div className="flex items-center my-2">
        <img src={SearchIcon} alt="search icon" className="size-8 mx-2" />
        <input
          type="text"
          placeholder="Search Food Items"
          className="w-full p-2"
          onChange={handleSearch}
        />
      </div>
      <div className="h-96 overflow-y-auto mt-2">
        {allFoodData.filter((val) => val.name.toLowerCase().includes(search))
          .length === 0 && (
          <p className="text-center text-customGray400"> No results found</p>
        )}
        {allFoodData
          .filter((val) => val.name.toLowerCase().includes(search))
          .map((val) => (
            <button
              type="button"
              onClick={() =>
                setAllFoodData(
                  allFoodData.map((food) => {
                    if (food.name === val.name) {
                      return { ...food, isSelected: !food.isSelected };
                    }
                    return food;
                  })
                )
              }
              key={val.name}
              className="flex w-[96%] justify-between py-2 border-b-2 px-1 mx-2"
            >
              <p>{val.name}</p>
              <CustomCheckbox
                checked={val.isSelected}
                onChange={() =>
                  setAllFoodData(
                    allFoodData.map((food) => {
                      if (food.name === val.name) {
                        return { ...food, isSelected: !food.isSelected };
                      }
                      return food;
                    })
                  )
                }
              />
            </button>
          ))}
      </div>
      <div className="px-4 py-4 my-1">
        <CustomButton text="Add" onPress={handleSubmit} />
      </div>
    </div>
  );
}

export default AddFoodItems;
