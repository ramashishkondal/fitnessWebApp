import AddPost from '../../Components/Molecules/AddPost';
import AddStory from '../../Components/Molecules/AddStory';
import AllPostsData from '../../Components/Molecules/AllPostsData';
import AllStoriesData from '../../Components/Molecules/AllStoriesData';

function Community() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center px-4">
        <p className="text-4xl font-semibold my-6 ">Community</p>
        <AddPost />
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="flex items-center shadow-lg rounded-lg mt-2 w-9/12">
          <div className="ml-2 my-2">
            <AddStory />
          </div>
          <AllStoriesData />
        </div>
        <AllPostsData />
      </div>
    </div>
  );
}

export default Community;
