import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { doc, onSnapshot } from 'firebase/firestore';
import { RootState } from '../../Store';
import AllMealData from '../../Components/Molecules/AllMealData';
import CustomModal from '../../Components/Molecules/CustomModal';
import WaterIntake from '../../Components/Molecules/WaterIntake';
import { updateHealthData } from '../../Store/Health';
import { db, firebaseDB } from '../../Utils/firebaseConfig';
import { resetMealDataItems } from '../../Store/MealData';

function Home() {
  // state use
  const [greeting, setGreeting] = useState('');
  const [isModalShown, setIsModalShown] = useState(false);

  // redux use
  const { id, photo, firstName } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch();

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

  const showModal = () => {
    setIsModalShown(true);
  };
  const closeModal = () => {
    setIsModalShown(false);
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
      dispatch(resetMealDataItems(dailyMealsDataFromFirebase));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch, id]);

  return (
    <div className="min-h-screen w-full">
      <CustomModal closeModal={closeModal} isModalShown={isModalShown}>
        <p>add food items</p>
      </CustomModal>
      <div className="w-full justify-end flex">
        <button type="button">
          <img
            src={photo}
            alt="profile"
            className="size-24 rounded-full m-4 object-none shadow-lg "
          />
        </button>
      </div>
      <div>
        <p className="text-4xl font-semibold">{`Good ${greeting}, ${firstName}`}</p>
      </div>
      <button type="button" onClick={showModal}>
        Add Meal
      </button>
      <div className="flex flex-1 flex-row">
        <div className="border flex flex-row justify-evenly ">
          <ReactApexChart
            options={{
              series: [44, 55, 67, 83],
              chart: {
                height: 350,
                type: 'radialBar',
                width: 200,
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: '22px',
                    },
                    value: {
                      fontSize: '16px',
                    },
                    total: {
                      show: true,
                      label: 'Total',
                      formatter: function (w) {
                        // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        return 249;
                      },
                    },
                  },
                },
              },
              labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
            }}
            series={[44, 55, 41, 17, 15]}
            type="radialBar"
            width="380"
          />
          <div>stats</div>
        </div>
        <div className="flex flex-1">
          <AllMealData />
        </div>
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
