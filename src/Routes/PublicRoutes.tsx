import { Navigate } from 'react-router-dom';
import { ROUTES_CONFIG, WILDCARD_ROUTES } from '../Shared/Constants';
import { CustomRouter } from './RootRoutes';
import SignIn from '../Views/SignIn';
import LandingPage from '../Views/LandingPage';
import { ONBOARDING_ROUTES } from './OnboardingRoutes';
import Create from '../Views/Create';

// eslint-disable-next-line import/prefer-default-export
export const PUBLIC_ROUTES: Array<CustomRouter> = [
  {
    path: ROUTES_CONFIG.LANDING_PAGE.path,
    element: <LandingPage />,
    title: ROUTES_CONFIG.LANDING_PAGE.title,
  },
  {
    path: `${ROUTES_CONFIG.SIGN_IN.path}`,
    title: ROUTES_CONFIG.SIGN_IN.title,
    element: <SignIn />,
  },
  {
    path: `${ROUTES_CONFIG.REGISTER.path}`,
    title: ROUTES_CONFIG.REGISTER.title,
    element: <Create />,
    children: ONBOARDING_ROUTES,
  },
  {
    path: '*',
    element: <Navigate to={WILDCARD_ROUTES.PUBLIC} />,
    title: 'Rendering wildcard',
  },
];
