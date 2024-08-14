import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { doc, onSnapshot } from 'firebase/firestore';
import GlassWater from '../../Atoms/GlassWater/GlassWater';
import { RootState } from '../../../Store';
import {
  sendNotification,
  updateWaterIntake,
} from '../../../Utils/firebaseStore';
import { HealthData, updateHealthData } from '../../../Store/Health';
import { weekday } from '../../../Shared/Constants';
import { db, firebaseDB } from '../../../Utils/firebaseConfig';

function WaterIntake() {
  // state use
  const [rating, setRating] = useState<{
    best: { value: number; week: string };
    worst: { value: number; week: string };
  }>();
  const [notificationSent, setNotificationSent] = useState(false);

  // redux use
  const dispatch = useDispatch();
  const {
    glassesLength,
    waterIntake,
    goal: { totalCalorie, totalSteps, noOfGlasses },
  } = useSelector((state: RootState) => state.health);
  const { id } = useSelector((state: RootState) => state.user);
  const [previousWaterIntake, setPreviousWaterIntake] = useState(waterIntake);

  // memo use
  const glasses = useMemo(
    () =>
      Array(glassesLength)
        .fill(true, 0, waterIntake + 1)
        .fill(false, waterIntake),
    [glassesLength, waterIntake]
  );

  // effect use
  useEffect(() => {
    if (waterIntake <= noOfGlasses) {
      dispatch(updateHealthData({ glassesLength: noOfGlasses }));
    } else if (waterIntake > glassesLength) {
      dispatch(updateHealthData({ glassesLength: waterIntake }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const healthDoc = doc(db, firebaseDB.collections.healthData, id!);

    const unsubscribe = onSnapshot(healthDoc, (snapshot) => {
      const filteredData: HealthData[] = Object.values(snapshot.data() ?? []);
      const bestWaterIntakeDay = filteredData.reduce(
        (acc, val) => {
          const currentDate = new Date(val.currentDate);
          if (val.waterIntake >= acc.value) {
            return {
              value: val.waterIntake,
              week:
                currentDate.toDateString() === new Date().toDateString()
                  ? 'Today'
                  : weekday[currentDate.getDay()],
            };
          }
          return acc;
        },
        { value: -Infinity, week: 'No data' }
      );
      const worstWaterIntakeDay = filteredData.reduce(
        (acc, val) => {
          const currentDate = new Date(val.currentDate);
          if (val.waterIntake <= acc.value) {
            return {
              value: val.waterIntake,
              week:
                currentDate.toDateString() === new Date().toDateString()
                  ? 'Today'
                  : weekday[currentDate.getDay()],
            };
          }
          return acc;
        },
        {
          value: +Infinity,
          week: 'No data',
        }
      );
      setRating({ best: bestWaterIntakeDay, worst: worstWaterIntakeDay });
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch, id, waterIntake]);
  useEffect(() => {
    if (
      waterIntake >= noOfGlasses &&
      !notificationSent &&
      waterIntake > previousWaterIntake
    ) {
      sendNotification(
        {
          isShownViaPushNotification: false,
          isUnread: true,
          message: "You've achieved your water intake goal for the day!",
          userId: 'App-Water',
        },
        id!
      );
      setNotificationSent(true);
    } else if (waterIntake < noOfGlasses) {
      setNotificationSent(false);
    }

    setPreviousWaterIntake(waterIntake);
  }, [waterIntake, id, noOfGlasses, notificationSent, previousWaterIntake]);

  // functions
  const handleGlassDrank = (i: number) => {
    updateWaterIntake(id!, i + 1, { totalCalorie, totalSteps, noOfGlasses });
  };
  const handleGlassEmpty = (i: number) => {
    if (waterIntake === i + 1) {
      updateWaterIntake(id!, i, { totalCalorie, totalSteps, noOfGlasses });
      return;
    }
    updateWaterIntake(id!, i + 1, { totalCalorie, totalSteps, noOfGlasses });
  };

  return (
    <div className="flex border flex-col">
      <div className="flex border">
        {glasses.map((val, index) => (
          <GlassWater
            key={uuidv4()}
            isFilled={val}
            handlePressFill={() => handleGlassDrank(index)}
            handlePressDelete={() => handleGlassEmpty(index)}
          />
        ))}
      </div>
      <div>
        <p>Best performance - {rating?.best.week}</p>
        <p>Worst performance - {rating?.worst.week}</p>
      </div>
    </div>
  );
}

export default WaterIntake;
