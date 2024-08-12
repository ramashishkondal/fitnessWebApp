// import { useEffect } from 'react';
// import { Post } from '../../../Shared/user';
// import { db, firebaseDB } from '../../../Utils/firebaseConfig';
// import { doc, onSnapshot, orderBy } from 'firebase/firestore';

function AllPostsData() {
  // effect use
  //   useEffect(() => {
  //     const postsDataDoc = doc(db, firebaseDB.collections.posts);
  //     const unsubscribe = onSnapshot(postsDataDoc, (snapshot) => {
  //       snapshot.data();
  //       orderBy('createdOn', 'desc');
  //     });

  //     const unsubscribe = firestore()
  //       .collection(firebaseDB.collections.posts)
  //       .orderBy('createdOn', 'desc')

  //       .onSnapshot((snapshot) => {
  //         const data = snapshot.docs;
  //         const x = data.map((val) => val.data()) as Post[];
  //         setPostsData(x);
  //       });

  //     return () => unsubscribe();
  //   }, []);
  return <div />;
}

export default AllPostsData;
