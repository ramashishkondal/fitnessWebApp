export { default as AppLogo } from '../assets/svgs/logoMain.svg';
export { default as ReactLogo } from '../assets/svgs/react.svg';
export { default as FacebookLogo } from '../assets/svgs/facebookLogo.svg';
export { default as GetItOnAppStore } from '../assets/svgs/getItOnAppStore.svg';
export { default as DrawerIcon } from '../assets/svgs/drawerIcon.svg';
export { default as LeftArrow } from '../assets/svgs/leftArrow.svg';
export { default as LandingPageImage } from '../assets/images/landingPageImage.jpeg';

const STRING = {
  LANDING_PAGE: {
    heading: 'Welcome to the Fitness App',
    description:
      'Reach your health goals with Fitness App, tracking your diet, water intake, and steps daily.',
    alreadyHaveAnAccount: 'Already have an account?',
    signInInstead: 'Sign In',
  },
};
export { STRING };

const ROUTES = {
  HOMEPAGE: '/',
  SIGN_IN: '/sign-in',
  REGISTER: '/create',
  EMAIL: '/create/add-email',
  PASSWORD: '/create/add-password',
  FIRST_NAME: '/create/add-first-name',
  LAST_NAME: '/create/add-last-name',
  PHOTO: '/create/add-photo',
  PREFERENCES: '/create/add-preferences',
  INTERESTS: '/create/add-interests',
  GENDER: '/create/add-gender',
  ABOUT: '/about-us',
};

const WILDCARD_ROUTES = {
  PUBLIC: ROUTES.HOMEPAGE,
  PRIVATE: ROUTES.SIGN_IN,
};

const ROUTES_CONFIG = {
  HOMEPAGE: {
    path: ROUTES.HOMEPAGE,
    title: 'HOME',
  },
  EMAIL: {
    path: ROUTES.EMAIL,
    title: 'Add Email',
  },
  PASSWORD: {
    path: ROUTES.PASSWORD,
    title: 'Add Password',
  },
  PHOTO: {
    path: ROUTES.PHOTO,
    title: 'Add First Name',
  },
  FIRST_NAME: {
    path: ROUTES.FIRST_NAME,
    title: 'Add Last Name',
  },
  LAST_NAME: {
    path: ROUTES.LAST_NAME,
    title: 'Add Password',
  },
  PREFERENCES: {
    path: ROUTES.PREFERENCES,
    title: 'Add Password',
  },
  INTERESTS: {
    path: ROUTES.INTERESTS,
    title: 'Add Password',
  },
  GENDER: {
    path: ROUTES.GENDER,
    title: 'Add Password',
  },
  SIGN_IN: {
    path: ROUTES.SIGN_IN,
    title: 'Sign In',
  },
  REGISTER: {
    path: ROUTES.REGISTER,
    title: 'Register',
  },
  ABOUT: {
    path: ROUTES.ABOUT,
    title: 'About US',
  },
};

export const COLORS = {
  PRIMARY: {
    GREY: '#F4F6FA',
    PURPLE: '#7265E3',
    LIGHT_PURPLE: '#E1DDF5',
    DARK_GREY: '#ECECEC',
    LIGHT_GREY: '#F4F6FA',
  },
  SECONDARY: {
    GREY: '#8e8e99',
    WHITE: '#FFFFFF',
    RED: '#ff0033',
    ORANGE: '#F7A56D',
    CYAN: '#44C7BC',
    LIGHT_GREY: '#DCDDE0',
    LIGHT_GREY_2: '#F1EFFA',
  },
};

export { ROUTES, WILDCARD_ROUTES, ROUTES_CONFIG };
