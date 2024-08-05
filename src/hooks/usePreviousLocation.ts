import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const usePreviousLocation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const previousLocation = useRef(location);

  useEffect(() => {
    previousLocation.current = location;
  }, [location]);

  const navigateBack = () => {
    navigate(-1); // This should go back to the previous route
  };

  return navigateBack;
};

export default usePreviousLocation;
