import { AppLogo, DoubleArrows, STRING } from '../../Shared/Constants';

function DetailsCompleted() {
  return (
    <div className="flex flex-col items-center justify-center bg-detailsCompleted py-64">
      <div className="size-16 bg-white rounded-full p-2">
        <img src={AppLogo} alt="app logo" />
      </div>
      <div className="text-white max-w-[400px] flex flex-col items-center mt-4">
        <p className="text-center text-4xl">
          {STRING.DETAILS_COMPLETED.heading}
        </p>
        <p className="text-center text-xl mt-4 font-light">
          {STRING.DETAILS_COMPLETED.description}
        </p>
      </div>
      <button type="button" className="mt-12">
        <img src={DoubleArrows} alt="Double Arrows" className="size-7" />
      </button>
    </div>
  );
}

export default DetailsCompleted;
