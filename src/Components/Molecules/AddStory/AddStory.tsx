import { Plus } from '../../../Shared/Constants';

function AddStory() {
  // functions
  const handleAddStory = () => {};

  return (
    <button
      type="button"
      className=" border bg-customGray200 flex justify-center items-center rounded-full size-14 p-3"
      onClick={handleAddStory}
    >
      <img src={Plus} alt="add story" />
    </button>
  );
}

export default AddStory;
