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
import GreetingLabel from '../../Components/Molecules/GreetingLabel';
import { PlusWhite } from '../../Shared/Constants';

function Home() {
  // state use
  const [isAddFoodItemsModalShown, setIsAddFoodItemsModalShown] =
    useState(false);

  // redux use
  const dispatch = useDispatch();
  const { id, photo, firstName } = useSelector(
    (state: RootState) => state.user
  );

  const showAddFoodItemsModal = () => {
    setIsAddFoodItemsModalShown(true);
  };
  const closeAddFoodItemsModal = () => {
    setIsAddFoodItemsModalShown(false);
  };

  // effect use
  useEffect(() => {
    const healthDoc = doc(db, firebaseDB.collections.healthData, id!);

    const unsubscribeHealthSnapshot = onSnapshot(healthDoc, (snapshot) => {
      const waterIntakeDataFromFirebase = snapshot.get(
        `${new Date().setHours(0, 0, 0, 0).toString()}.waterIntake`
      );

      if (!waterIntakeDataFromFirebase) {
        dispatch(updateHealthData({ waterIntake: 0 }));
        return;
      }
      dispatch(updateHealthData({ waterIntake: waterIntakeDataFromFirebase }));
    });
    const mealDataDoc = doc(db, firebaseDB.collections.dailyMeals, id!);

    const unsubscribeMealSnapshot = onSnapshot(mealDataDoc, (snapshot) => {
      const dailyMealsDataFromFirebase = snapshot.get(
        `${new Date().setHours(0, 0, 0, 0).toString()}`
      );
      if (!dailyMealsDataFromFirebase) {
        return;
      }
      dispatch(resetMealDataItemsTo(dailyMealsDataFromFirebase));
    });

    return () => {
      unsubscribeMealSnapshot();
      unsubscribeHealthSnapshot();
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
      <div className="flex justify-between p-3">
        <GreetingLabel name={firstName} />
        <button
          type="button"
          onClick={showAddFoodItemsModal}
          className="flex pr-3 items-center border px-2 rounded-md bg-customPurple text-white"
        >
          <p>Add Meal</p>
          <img src={PlusWhite} alt="add meal" className="size-4 ml-2" />
        </button>
      </div>
      <div className="flex flex-1 flex-row">
        <div className="flex justify-center items-center mx-2 rounded-md shadow-md">
          <div className="bg-red-600 w-full h-full " />
          <p className="text-vertical text-4xl p-2">Nutrition</p>
          <p className="text-vertical text-customGray300 text-2xl mb-2 ">
            12 cal / 2500
          </p>
        </div>

        <MealChartAndStats />
        <AllMealData />
      </div>
      <div>
        <div className="flex h-96 my-8">
          <div className="flex justify-center items-center mx-2 rounded-md shadow-md">
            <p className="text-vertical text-4xl p-2">Water Intake</p>
            <p className="text-vertical text-customGray300 text-2xl mb-2 ">
              0 / 10
            </p>
          </div>
          <WaterIntake />
        </div>
      </div>
    </div>
  );
}

export default Home;
