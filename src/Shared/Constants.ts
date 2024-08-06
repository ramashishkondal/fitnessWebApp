import avatar_1 from '../assets/images/Avatars/avatar_1.jpg';
import avatar_2 from '../assets/images/Avatars/avatar_2.jpg';
import avatar_3 from '../assets/images/Avatars/avatar_3.jpg';
import avatar_4 from '../assets/images/Avatars/avatar_4.jpg';
import avatar_5 from '../assets/images/Avatars/avatar_5.jpg';
import avatar_6 from '../assets/images/Avatars/avatar_6.jpg';
import avatar_7 from '../assets/images/Avatars/avatar_7.jpg';
import avatar_8 from '../assets/images/Avatars/avatar_8.jpg';

export { default as AppLogo } from '../assets/svgs/logoMain.svg';
export { default as ReactLogo } from '../assets/svgs/react.svg';
export { default as FacebookLogo } from '../assets/svgs/facebookLogo.svg';
export { default as GetItOnAppStore } from '../assets/svgs/getItOnAppStore.svg';
export { default as DrawerIcon } from '../assets/svgs/drawerIcon.svg';
export { default as LeftArrow } from '../assets/svgs/leftArrow.svg';
export { default as Male } from '../assets/svgs/male.svg';
export { default as Female } from '../assets/svgs/female.svg';
export { default as Close } from '../assets/svgs/close.svg';
export { default as DoubleArrows } from '../assets/svgs/doubleArrow.svg';

// interests
export { default as Fashion } from '../assets/svgs/Interests/Fashion.svg';
export { default as Dumbell } from '../assets/svgs/Interests/dumbell.svg';
export { default as HeartBeating } from '../assets/svgs/Interests/heartBeating.svg';
export { default as Meditation } from '../assets/svgs/Interests/meditation.svg';
export { default as NoSmoking } from '../assets/svgs/Interests/noSmoking.svg';
export { default as Plant } from '../assets/svgs/Interests/plant.svg';
export { default as RunningMan } from '../assets/svgs/Interests/runningMan.svg';
export { default as Shirt } from '../assets/svgs/Interests/shirt.svg';
export { default as SleepingMan } from '../assets/svgs/Interests/sleepingMan.svg';
export { default as Vegan } from '../assets/svgs/Interests/vegan.svg';

export { default as LandingPageImage } from '../assets/images/landingPageImage.jpeg';
export { default as Check } from '../assets/images/check.png';

export const AVATARS = [
  {
    name: 'avatar_1',
    image: avatar_1,
  },
  {
    name: 'avatar_2',
    image: avatar_2,
  },
  {
    name: 'avatar_3',
    image: avatar_3,
  },
  {
    name: 'avatar_4',
    image: avatar_4,
  },
  {
    name: 'avatar_5',
    image: avatar_5,
  },
  {
    name: 'avatar_6',
    image: avatar_6,
  },
  {
    name: 'avatar_7',
    image: avatar_7,
  },
  {
    name: 'avatar_8',
    image: avatar_8,
  },
] as const;

const STRING = {
  APP_NAME: 'Fitness App',
  NAV_BAR: {
    getStarted: 'Get Started',
    signIn: 'Sign In',
  },
  LANDING_PAGE: {
    heading: 'Welcome to the Fitness App',
    description:
      'Reach your health goals with Fitness App, tracking your diet, water intake, and steps daily.',
    alreadyHaveAnAccount: 'Already have an account?',
    signInInstead: 'Sign In',
  },
  ADD_EMAIL: {
    heading: 'What is your email address?',
    emailPlaceholder: 'Enter your email address',
    errorEmailEmpty: 'Please enter your email address.',
    errorEmailInvalid: 'Please enter a valid email address.',
  },
  ADD_FIRST_NAME: {
    heading: 'What is your first name?',
    firstNamePlaceholder: 'Enter your first name',
  },
  ADD_LAST_NAME: {
    heading: 'What is your last name?',
    lastNamePlaceholder: 'Enter your last name',
  },
  ADD_PROFILE_PICTURE: {
    heading: 'Profile Picture',
    description:
      'You can select photo from one of this emoji or add your own photo as profile picture',
    addPhotoButton: 'Add Custom Photo',
    changePhotoButton: 'Change Custom Photo',
    description_2:
      'Press the close button to select an emoji or change the added custom photo.',
    submitButton: 'Continue',
  },
  ADD_PREFERENCES: {
    heading: 'Let us know how we can help you',
    description: 'You can always change this later',
    submitButton: 'Continue',
  },
  ADD_INTERESTS: {
    heading: 'Time to customize your interests',
    submitButton: 'Continue',
  },
  ADD_GENDER: {
    heading: 'Which one are you?',
    male: 'Male' as const,
    female: 'Female' as const,
    description: 'To give you a better experience we need to know your gender',
    submitButton: 'Continue',
  },
  DETAILS_COMPLETED: {
    heading: 'You are ready to go!',
    description:
      "Thanks for taking your time to create account with us. Now this is the fun part, let's explore.",
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
  DETAILS_COMPLETED: '/create/details-completed',
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
  DETAILS_COMPLETED: {
    path: ROUTES.DETAILS_COMPLETED,
    title: 'Details Completed',
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
