import { PostSign } from '../../../Shared/Constants';

function AddPost() {
  const handlePostPressed = () => {};
  return (
    <button type="button" onClick={handlePostPressed}>
      <img src={PostSign} alt="post sign" className="size-10" />
    </button>
  );
}
export default AddPost;
