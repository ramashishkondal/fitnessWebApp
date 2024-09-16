import avatar_1 from '../assets/images/Avatars/avatar_1.jpg';
import avatar_2 from '../assets/images/Avatars/avatar_2.jpg';
import avatar_3 from '../assets/images/Avatars/avatar_3.jpg';
import avatar_4 from '../assets/images/Avatars/avatar_4.jpg';
import avatar_5 from '../assets/images/Avatars/avatar_5.jpg';
import avatar_6 from '../assets/images/Avatars/avatar_6.jpg';
import avatar_7 from '../assets/images/Avatars/avatar_7.jpg';
import avatar_8 from '../assets/images/Avatars/avatar_8.jpg';
import { Meal } from '../Store/MealData';

export { default as AppLogo } from '../assets/svgs/logoMain.svg';
export { default as ReactLogo } from '../assets/svgs/react.svg';
export { default as GetItOnAppStore } from '../assets/svgs/getItOnAppStore.svg';
export { default as DrawerIcon } from '../assets/svgs/drawerIcon.svg';
export { default as LeftArrow } from '../assets/svgs/leftArrow.svg';
export { default as Male } from '../assets/svgs/male.svg';
export { default as Female } from '../assets/svgs/female.svg';
export { default as Close } from '../assets/svgs/close.svg';
export { default as DoubleArrows } from '../assets/svgs/doubleArrow.svg';
export { default as GoogleLogo } from '../assets/svgs/googleLogo.svg';
export { default as FacebookLogo } from '../assets/svgs/facebookLogo.svg';
export { default as GlassWaterFull } from '../assets/svgs/glassWater.svg';
export { default as GlassWaterEmpty } from '../assets/svgs/glassWaterEmpty.svg';
export { default as Plus } from '../assets/svgs/plus.svg';
export { default as PlusWhite } from '../assets/svgs/plusWhite.svg';
export { default as HeartLiked } from '../assets/svgs/heartLiked.svg';
export { default as HeartUnLiked } from '../assets/svgs/heartUnLiked.svg';
export { default as CommentDialog } from '../assets/svgs/comment.svg';
export { default as PostSign } from '../assets/svgs/postSign.svg';
export { default as LeftArrowRounded } from '../assets/svgs/leftArrowRounded.svg';
export { default as RightArrowRounded } from '../assets/svgs/rightArrowRounded.svg';
export { default as HomeIcon } from '../assets/svgs/home.svg';
export { default as CommunityIcon } from '../assets/svgs/community.svg';
export { default as SettingsIcon } from '../assets/svgs/settings.svg';
export { default as LogOutIcon } from '../assets/svgs/logout.svg';
export { default as SearchIcon } from '../assets/svgs/search.svg';
export { default as FoodBowl } from '../assets/svgs/foodBowl.svg';
export { default as Pencil } from '../assets/svgs/pencil.svg';
export { default as SmileyBad } from '../assets/svgs/smileyBad.svg';
export { default as SmileyGood } from '../assets/svgs/smileyGood.svg';
export { default as Smiley } from '../assets/svgs/smiley.svg';
export { default as GarbageCan } from '../assets/svgs/garbageCan.svg';

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
export { default as DefaultUser } from '../assets/images/defaultUser.jpeg';

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
  SETTINGS: {
    heading: 'Settings',
    editProfile: 'Edit Profile',
    inviteFriend: 'Invite Friend',
    pushNotification: 'Push Notification',
    resetPassword: 'Reset Password',
    giveFeedback: 'Give Feedback',
    aboutUs: 'About Us',
    logOut: 'Log Out',
  },
};
export { STRING };

const ROUTES = {
  FORGOT_PASSWORD: '/forgot-password',
  EDIT_PROFILE: '/edit-profile',
  LANDING_PAGE: '/',
  HOME: '/',
  SETTINGS: '/settings',
  COMMUNITY: '/community',
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
  PUBLIC: ROUTES.LANDING_PAGE,
  PRIVATE: ROUTES.HOME,
};

const ROUTES_CONFIG = {
  HOME: {
    path: ROUTES.HOME,
    title: 'HOME',
  },
  FORGOT_PASSWORD: {
    path: ROUTES.FORGOT_PASSWORD,
    title: 'Forgot Password',
  },
  EDIT_PROFILE: {
    path: ROUTES.EDIT_PROFILE,
    title: 'Edit Profile',
  },
  COMMUNITY: {
    path: ROUTES.COMMUNITY,
    title: 'COMMUNITY',
  },
  SETTINGS: {
    path: ROUTES.SETTINGS,
    title: 'SETTINGS',
  },
  LANDING_PAGE: {
    path: ROUTES.LANDING_PAGE,
    title: 'Landing Page',
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
export { ROUTES, WILDCARD_ROUTES, ROUTES_CONFIG };

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
    GREEN: '#4CD965',
  },
};

export const foodData: Array<Omit<Meal, 'id'>> = [
  {
    name: 'Apple',
    carbs: 25,
    fat: 0.3,
    protein: 0.5,
    calories: 95,
    serving_size_g: 182,
  },
  {
    name: 'Banana',
    carbs: 27,
    fat: 0.3,
    protein: 1.3,
    calories: 105,
    serving_size_g: 118,
  },
  {
    name: 'Chicken Breast',
    carbs: 0,
    fat: 3.6,
    protein: 31,
    calories: 165,
    serving_size_g: 100,
  },
  {
    name: 'Broccoli',
    carbs: 6,
    fat: 0.3,
    protein: 2.6,
    calories: 55,
    serving_size_g: 91,
  },
  {
    name: 'Almonds',
    carbs: 6,
    fat: 14,
    protein: 6,
    calories: 164,
    serving_size_g: 28,
  },
  {
    name: 'Salmon',
    carbs: 0,
    fat: 13,
    protein: 20,
    calories: 208,
    serving_size_g: 100,
  },
  {
    name: 'Oatmeal',
    carbs: 27,
    fat: 3,
    protein: 5,
    calories: 154,
    serving_size_g: 40,
  },
  {
    name: 'Egg',
    carbs: 1.1,
    fat: 5,
    protein: 6,
    calories: 78,
    serving_size_g: 50,
  },
  {
    name: 'Greek Yogurt',
    carbs: 4,
    fat: 0.4,
    protein: 10,
    calories: 59,
    serving_size_g: 170,
  },
  {
    name: 'Avocado',
    carbs: 12,
    fat: 15,
    protein: 2,
    calories: 160,
    serving_size_g: 150,
  },
  {
    name: 'Sweet Potato',
    carbs: 27,
    fat: 0.1,
    protein: 2,
    calories: 112,
    serving_size_g: 130,
  },
  {
    name: 'Brown Rice',
    carbs: 45,
    fat: 1.5,
    protein: 5,
    calories: 216,
    serving_size_g: 195,
  },
  {
    name: 'Quinoa',
    carbs: 39,
    fat: 3.5,
    protein: 8,
    calories: 222,
    serving_size_g: 185,
  },
  {
    name: 'Whole Wheat Bread',
    carbs: 12,
    fat: 1,
    protein: 3,
    calories: 69,
    serving_size_g: 28,
  },
  {
    name: 'Black Beans',
    carbs: 40,
    fat: 0.9,
    protein: 14,
    calories: 227,
    serving_size_g: 172,
  },
  {
    name: 'Lentils',
    carbs: 40,
    fat: 0.8,
    protein: 18,
    calories: 230,
    serving_size_g: 198,
  },
  {
    name: 'Pasta',
    carbs: 31,
    fat: 1.3,
    protein: 6,
    calories: 157,
    serving_size_g: 100,
  },
  {
    name: 'Corn',
    carbs: 19,
    fat: 1.5,
    protein: 3.2,
    calories: 86,
    serving_size_g: 100,
  },
  {
    name: 'Potato',
    carbs: 17,
    fat: 0.1,
    protein: 2,
    calories: 77,
    serving_size_g: 100,
  },
  {
    name: 'White Rice',
    carbs: 28,
    fat: 0.3,
    protein: 2.7,
    calories: 130,
    serving_size_g: 100,
  },
  {
    name: 'Barley',
    carbs: 44,
    fat: 0.4,
    protein: 4.4,
    calories: 193,
    serving_size_g: 157,
  },
  {
    name: 'Chickpeas',
    carbs: 27,
    fat: 2.6,
    protein: 14.5,
    calories: 164,
    serving_size_g: 100,
  },
  {
    name: 'Peas',
    carbs: 14,
    fat: 0.4,
    protein: 5.4,
    calories: 81,
    serving_size_g: 100,
  },
  {
    name: 'Butternut Squash',
    carbs: 12,
    fat: 0.1,
    protein: 1,
    calories: 45,
    serving_size_g: 100,
  },
  {
    name: 'Pumpkin',
    carbs: 7,
    fat: 0.1,
    protein: 1,
    calories: 26,
    serving_size_g: 100,
  },
  {
    name: 'Dates',
    carbs: 75,
    fat: 0.2,
    protein: 2,
    calories: 282,
    serving_size_g: 100,
  },
  {
    name: 'Honey',
    carbs: 82,
    fat: 0,
    protein: 0.3,
    calories: 304,
    serving_size_g: 100,
  },
  {
    name: 'Raisins',
    carbs: 79,
    fat: 0.5,
    protein: 3.1,
    calories: 299,
    serving_size_g: 100,
  },
  {
    name: 'Mango',
    carbs: 15,
    fat: 0.4,
    protein: 0.8,
    calories: 60,
    serving_size_g: 100,
  },
  {
    name: 'Carrots',
    carbs: 10,
    fat: 0.2,
    protein: 0.9,
    calories: 41,
    serving_size_g: 100,
  },
  {
    name: 'Beets',
    carbs: 10,
    fat: 0.2,
    protein: 1.6,
    calories: 43,
    serving_size_g: 100,
  },
  {
    name: 'Couscous',
    carbs: 23,
    fat: 0.2,
    protein: 3.8,
    calories: 112,
    serving_size_g: 100,
  },
  {
    name: 'Kidney Beans',
    carbs: 22,
    fat: 0.5,
    protein: 8.7,
    calories: 127,
    serving_size_g: 100,
  },
];

export const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
