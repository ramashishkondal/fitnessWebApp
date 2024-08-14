import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db, firebaseDB } from '../../../Utils/firebaseConfig';
import { Story } from '../../../Shared/user';
import StoryData from '../../StoryData';

function AllStoriesData() {
  // state use
  const [userStories, setUserStories] = useState<Story[]>([]);
  // const [userIndex, setUserIndex] = useState(0);
  // const [storyIndex, setStoryIndex] = useState(0);

  // effect use
  useEffect(() => {
    const q = query(
      collection(db, firebaseDB.collections.stories),
      orderBy('latestStoryOn', 'desc')
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data()) as Story[];
      setUserStories(data);
    });
    return () => unsubscribe();
  }, []);

  if (!userStories) {
    return null;
  }

  // functions
  // const onStoryPressed = (pressedAtUserIndex: number) => {
  //   setUserIndex(pressedAtUserIndex);
  //   setStoryIndex(0);
  // };
  return (
    <div className="flex">
      {userStories.map((val) => (
        <StoryData
          userPhoto={val.userPhoto}
          key={val.storyByUserId}
          stories={val.stories}
          userName={val.userName}
        />
      ))}
    </div>
  );
}

export default AllStoriesData;
