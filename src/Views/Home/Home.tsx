import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { RootState } from '../../Store';
import AllMealData from '../../Components/Molecules/AllMealData';
import CustomModal from '../../Components/Molecules/CustomModal';
import WaterIntake from '../../Components/Molecules/WaterIntake';
import { updateHealthData } from '../../Store/Health';
import { db, firebaseDB } from '../../Utils/firebaseConfig';
import { resetMealDataItemsTo } from '../../Store/MealData';

import MealChartAndStats from '../../Components/Molecules/MealChartAndStats';
import AddFoodItems from '../../Components/Molecules/AddFoodItems';

function Home() {
  // state use
  const [greeting, setGreeting] = useState('');
  const [isAddFoodItemsModalShown, setIsAddFoodItemsModalShown] =
    useState(false);

  // redux use
  const dispatch = useDispatch();
  const { id, photo, firstName } = useSelector(
    (state: RootState) => state.user
  );

  // Update greeting based on time
  const updateGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('morning');
    } else if (currentHour < 18) {
      setGreeting('afternoon');
    } else {
      setGreeting('evening');
    }
  };

  const showAddFoodItemsModal = () => {
    setIsAddFoodItemsModalShown(true);
  };
  const closeAddFoodItemsModal = () => {
    setIsAddFoodItemsModalShown(false);
  };

  useEffect(() => {
    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Check every minute
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  useEffect(() => {
    const healthDoc = doc(db, firebaseDB.collections.healthData, id!);

    const unsubscribe = onSnapshot(healthDoc, (snapshot) => {
      const waterIntakeDataFromFirebase = snapshot.get(
        `${new Date().setHours(0, 0, 0, 0).toString()}.waterIntake`
      );

      if (!waterIntakeDataFromFirebase) {
        dispatch(updateHealthData({ waterIntake: 0 }));
        return;
      }
      dispatch(updateHealthData({ waterIntake: waterIntakeDataFromFirebase }));
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch, id]);

  useEffect(() => {
    const mealDataDoc = doc(db, firebaseDB.collections.dailyMeals, id!);

    const unsubscribe = onSnapshot(mealDataDoc, (snapshot) => {
      const dailyMealsDataFromFirebase = snapshot.get(
        `${new Date().setHours(0, 0, 0, 0).toString()}`
      );
      if (!dailyMealsDataFromFirebase) {
        return;
      }
      dispatch(resetMealDataItemsTo(dailyMealsDataFromFirebase));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch, id]);

  return (
    <div className="w-full px-4">
      <CustomModal
        closeModal={closeAddFoodItemsModal}
        isModalShown={isAddFoodItemsModalShown}
      >
        <AddFoodItems closeModal={closeAddFoodItemsModal} />
      </CustomModal>
      <div className="w-full justify-end flex">
        <button type="button">
          <img
            src={photo}
            alt="profile"
            className="size-24 rounded-full m-4 object-cover shadow-lg "
          />
        </button>
      </div>
      <div>
        <p className="text-4xl font-semibold">{`Good ${greeting}, ${firstName}`}</p>
      </div>
      <button type="button" onClick={showAddFoodItemsModal}>
        Add Meal
      </button>
      <div className="flex flex-1 flex-row">
        <div className="flex justify-center items-center mx-2 rounded-md shadow-md">
          <p className="text-vertical text-4xl p-2">Nutrition</p>
          <p className="text-vertical text-customGray300 text-4xl mb-2 text-xl">
            12 cal / 2500
          </p>
        </div>

        <MealChartAndStats />
        <AllMealData />
      </div>
      <div>
        <p>Water Intake</p>
        <div>
          <WaterIntake />
        </div>
      </div>
    </div>
  );
}

export default Home;
