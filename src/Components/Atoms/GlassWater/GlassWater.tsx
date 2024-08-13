import { GlassWaterProps } from '.';
import {
  GlassWaterFull,
  GlassWaterEmpty,
  Plus,
} from '../../../Shared/Constants';

function GlassWater({
  handlePressDelete,
  handlePressFill,
  isFilled,
}: Readonly<GlassWaterProps>) {
  return (
    <div>
      {isFilled ? (
        <button type="button" onClick={handlePressDelete}>
          <img
            src={GlassWaterFull}
            alt="glass water filled"
            className="size-16"
            draggable={false}
          />
        </button>
      ) : (
        <button
          type="button"
          onClick={handlePressFill}
          className="flex justify-center items-center"
        >
          <img
            src={Plus}
            alt="add water"
            className="size-6 absolute"
            draggable={false}
          />
          <img
            src={GlassWaterEmpty}
            alt="glass water empty"
            className="size-16"
            draggable={false}
          />
        </button>
      )}
    </div>
  );
}

export default GlassWater;
