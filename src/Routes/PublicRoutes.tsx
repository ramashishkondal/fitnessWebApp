import { Navigate } from 'react-router-dom';
import { ROUTES_CONFIG, WILDCARD_ROUTES } from '../Shared/Constants';
import { CustomRouter } from './RootRoutes';
import SignIn from '../Views/SignIn';
import LandingPage from '../Views/LandingPage';
import AddPassword from '../Views/AddPassword';
import AddEmail from '../Views/AddEmail';
import Create from '../Views/Create';
import AddFirstName from '../Views/AddFirstName';
import AddLastName from '../Views/AddLastName';

export const ONBOARDING_ROUTES = [
  {
    path: `${ROUTES_CONFIG.EMAIL.path}`,
    element: <AddEmail />,
  },
  {
    path: `${ROUTES_CONFIG.PASSWORD.path}`,
    element: <AddPassword />,
  },
  {
    path: `${ROUTES_CONFIG.FIRST_NAME.path}`,
    element: <AddFirstName />,
  },
  {
    path: `${ROUTES_CONFIG.LAST_NAME.path}`,
    element: <AddLastName />,
  },
  {
    path: `${ROUTES_CONFIG.PHOTO.path}`,
    element: '<AddPassword />',
  },
  {
    path: `${ROUTES_CONFIG.PREFERENCES.path}`,
    element: '<AddPreferences />',
  },
  {
    path: `${ROUTES_CONFIG.INTERESTS.path}`,
    element: '<AddInterests />',
  },
  {
    path: `${ROUTES_CONFIG.GENDER.path}`,
    element: '<AddGender />',
  },
];
// eslint-disable-next-line import/prefer-default-export
export const PUBLIC_ROUTES: Array<CustomRouter> = [
  {
    path: ROUTES_CONFIG.HOMEPAGE.path,
    element: <LandingPage />,
    title: ROUTES_CONFIG.HOMEPAGE.title,
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
