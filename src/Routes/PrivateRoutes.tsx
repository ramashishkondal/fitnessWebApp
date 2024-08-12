import { Navigate } from 'react-router-dom';
import { ROUTES_CONFIG, WILDCARD_ROUTES } from '../Shared/Constants';
import { CustomRouter } from './RootRoutes';
import Home from '../Views/Home';
import Settings from '../Views/Settings';
import Community from '../Views/Community';

// eslint-disable-next-line import/prefer-default-export
export const PRIVATE_ROUTES: Array<CustomRouter> = [
  {
    path: ROUTES_CONFIG.HOME.path,
    element: <Home />,
    title: ROUTES_CONFIG.HOME.title,
  },
  {
    path: ROUTES_CONFIG.ABOUT.path,
    element: '<ABOUT />',
    title: ROUTES_CONFIG.ABOUT.title,
  },
  {
    path: ROUTES_CONFIG.COMMUNITY.path,
    element: <Community />,
    title: ROUTES_CONFIG.COMMUNITY.title,
  },
  {
    path: ROUTES_CONFIG.SETTINGS.path,
    element: <Settings />,
    title: ROUTES_CONFIG.SETTINGS.title,
  },
  {
    path: '/wishlist',
    element: 'Your wishlist here',
    title: 'Dashboard',
  },
  {
    path: '*',
    element: <Navigate to={WILDCARD_ROUTES.PRIVATE} />,
    title: 'Rendering wildcard',
  },
];
