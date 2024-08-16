import CustomButton from '../../Atoms/CustomButton';

function GiveFeedback() {
  return (
    <div className="px-4 py-8">
      <p className="text-3xl font-semibold text-center">Give Feedback</p>
      <textarea
        placeholder="Give Feedback....."
        className="border w-96 h-64 my-16 rounded-md p-3 text-wrap text-left resize-none"
        onChange={(e) => {
          e.stopPropagation();
        }}
      />
      <div className="">
        <CustomButton text="Submit" />
      </div>
    </div>
  );
}

export default GiveFeedback;
