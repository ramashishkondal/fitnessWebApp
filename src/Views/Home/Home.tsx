import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';

function Home() {
  // redux use
  const { id } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    
    console.log('id is ', id);
  }, [id]);

  return <div className="min-h-screen bg-red-400">Home</div>;
}

export default Home;
