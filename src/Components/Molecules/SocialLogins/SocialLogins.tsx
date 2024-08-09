import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import {
  FacebookLogo,
  Fashion,
  GoogleLogo,
  HeartBeating,
  NoSmoking,
  Plant,
  RunningMan,
  SleepingMan,
  Vegan,
} from '../../../Shared/Constants';
import { auth } from '../../../Utils/firebaseConfig';
import { createUser } from '../../../Utils/firebaseStore';
import { extractAlphabets } from '../../../Utils/commonUtils';
import { updateUserData } from '../../../Store/User';

function SocialLogins() {
  // redux use
  const dispatch = useDispatch();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName, uid, email, photoURL },
    } = await signInWithPopup(auth, provider);
    dispatch(updateUserData({ id: uid }));

    console.log('====================================');
    console.log('id is ', uid);
    console.log('====================================');

    if (email && uid) {
      createUser(uid, {
        email,
        firstName: extractAlphabets(displayName?.split(' ')[0] ?? ''),
        lastName: extractAlphabets(displayName?.split(' ')[1] ?? ''),
        photo: photoURL ?? '',
        id: uid,
        finger: false,
        gender: null,
        interests: [
          {
            title: 'Fashion',
            icon: Fashion,
            selected: false,
          },
          {
            title: 'Organic',
            icon: Plant,
            selected: false,
          },
          {
            title: 'Meditation',
            icon: HeartBeating,
            selected: false,
          },
          {
            title: 'Fitness',
            icon: RunningMan,
            selected: false,
          },
          {
            title: 'Smoke Free',
            icon: NoSmoking,
            selected: false,
          },
          {
            title: 'Sleep',
            icon: SleepingMan,
            selected: false,
          },
          {
            title: 'Health',
            icon: HeartBeating,
            selected: false,
          },
          {
            title: 'Running',
            icon: RunningMan,
            selected: false,
          },
          {
            title: 'Vegan',
            icon: Vegan,
            selected: false,
          },
        ],
        preferences: [
          { title: 'Weight Loss', selected: false },
          { title: 'Better sleeping habit', selected: false },
          { title: 'Track my nutrition', selected: false },
          { title: 'Improve overall fitness', selected: false },
        ],
        healthData: [],
        notifications: [],
        storiesWatched: [],
        createdOn: '',
      });
    }
  };
  return (
    <div className="flex flex-col items-center mt-8 mb-4">
      <p className="flex my-4">Sign in with</p>
      <div className="flex  items-center justify-center">
        <button
          type="button"
          className="w-14 p-3 rounded-full border mr-4 hover:bg-customGray200"
        >
          <img src={FacebookLogo} alt="facebook logo" />
        </button>
        <button
          type="button"
          className="w-14 p-3 rounded-full border hover:bg-customGray200"
          onClick={handleGoogleSignIn}
        >
          <img src={GoogleLogo} alt="Google logo" />
        </button>
      </div>
    </div>
  );
}

export default SocialLogins;
