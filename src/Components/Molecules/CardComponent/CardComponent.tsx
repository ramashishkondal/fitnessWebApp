import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { LeftArrow } from '../../../Shared/Constants';
import { CardComponentProps } from './types';
import usePreviousLocation from '../../../hooks/usePreviousLocation';
import { ONBOARDING_ROUTES } from '../../../Routes/PublicRoutes';

function CardComponent({ children }: Readonly<CardComponentProps>) {
  const navigateBack = usePreviousLocation();
  const location = useLocation();

  const percentage = useMemo(
    () =>
      ((ONBOARDING_ROUTES.findIndex((val) => val.path === location.pathname) +
        1) /
        ONBOARDING_ROUTES.length) *
      100,
    [location]
  );

  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="bg-white mt-10 min-w-[520px] shadow-xl shadow-gray-400 rounded-lg">
        <div className="w-full bg-gray-300 h-2 rounded-t-3xl">
          <div
            style={{ width: `${percentage}%`, transition: 'width 0.5s ease' }}
            className="bg-purple-400 h-2 rounded-tl-2xl "
          />
        </div>
        <button type="button" onClick={navigateBack}>
          <img src={LeftArrow} alt="Back button" className="size-6 m-6" />
        </button>
        {children}
      </div>
    </div>
  );
}

export default CardComponent;
