import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import GlassWater from '../../Atoms/GlassWater/GlassWater';
import { RootState } from '../../../Store';
import { updateWaterIntake } from '../../../Utils/firebaseStore';

function WaterIntake() {
  // redux use
  const {
    glassesLength,
    waterIntake,
    goal: { totalCalorie, totalSteps, noOfGlasses },
  } = useSelector((state: RootState) => state.health);
  const { id } = useSelector((state: RootState) => state.user);
  // memo use
  const glasses = useMemo(
    () =>
      Array(glassesLength)
        .fill(true, 0, waterIntake + 1)
        .fill(false, waterIntake),
    [glassesLength, waterIntake]
  );
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
        <p>Best performance</p>
      </div>
    </div>
  );
}

export default WaterIntake;
