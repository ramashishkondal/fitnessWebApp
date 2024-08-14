import { ROUTES_CONFIG } from '../Shared/Constants';
import AddEmail from '../Views/AddEmail';
import AddFirstName from '../Views/AddFirstName';
import AddGender from '../Views/AddGender';
import AddInterests from '../Views/AddInterests';
import AddLastName from '../Views/AddLastName';
import AddPassword from '../Views/AddPassword';
import AddPreferences from '../Views/AddPreferences';
import AddProfilePicture from '../Views/AddProfilePicture';
import DetailsCompleted from '../Views/DetailsCompleted';

// eslint-disable-next-line import/prefer-default-export
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
    element: <AddProfilePicture />,
  },
  {
    path: `${ROUTES_CONFIG.PREFERENCES.path}`,
    element: <AddPreferences />,
  },
  {
    path: `${ROUTES_CONFIG.INTERESTS.path}`,
    element: <AddInterests />,
  },
  {
    path: `${ROUTES_CONFIG.GENDER.path}`,
    element: <AddGender />,
  },
  {
    path: `${ROUTES_CONFIG.DETAILS_COMPLETED.path}`,
    element: <DetailsCompleted />,
  },
];
