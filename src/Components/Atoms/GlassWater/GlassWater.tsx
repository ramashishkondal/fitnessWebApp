import React from 'react';
import { GlassWaterProps } from '.';
import { glassWater, glassWaterEmpty } from '../../../Shared/Constants';

function GlassWater({
  handlePressDelete,
  handlePressFill,
  isFilled,
}: GlassWaterProps) {
  return (
    <div>
      {isFilled ? (
        <button type="button" onClick={handlePressDelete}>
          <img src={glassWater} alt="glass water filled" className="size-16" />
        </button>
      ) : (
        <button type="button" onClick={handlePressFill}>
          <img
            src={glassWaterEmpty}
            alt="glass water empty"
            className="size-16"
          />
        </button>
      )}
    </div>
  );
}

export default GlassWater;
