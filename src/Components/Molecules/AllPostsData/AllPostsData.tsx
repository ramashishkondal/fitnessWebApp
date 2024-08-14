import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db, firebaseDB } from '../../../Utils/firebaseConfig';
import { Post } from '../../../Shared/user';
import UserPost from '../UserPost';

function AllPostsData() {
  // state use
  const [posts, setPosts] = useState<Post[]>([]);

  // effect use
  useEffect(() => {
    // Create a Firestore query
    const q = query(
      collection(db, firebaseDB.collections.posts),
      orderBy('createdOn', 'desc')
    );

    // Set up the onSnapshot listener
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data()) as Post[];
      setPosts(data);
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  // console.log('posts data', posts);

  return (
    <div>
      {posts.map((val) => (
        <UserPost Post={val} key={val.postId} />
      ))}
    </div>
  );
}

export default AllPostsData;
