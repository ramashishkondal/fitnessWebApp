import CustomButton from '../../Atoms/CustomButton';

function ResetPassword() {
  return (
    <div className="px-4 py-8">
      <p className="text-3xl font-semibold text-center">Reset Password</p>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Enter current password"
          className="border w-96 mt-8 my-2 rounded-md p-3 text-wrap text-left resize-none"
          onChange={(e) => {
            console.log('this pressed');
            e.stopPropagation();
          }}
        />
        <input
          type="text"
          placeholder="Enter new password"
          className="border w-96  my-2 rounded-md p-3 text-wrap text-left resize-none"
          onChange={(e) => {
            console.log('this pressed');
            e.stopPropagation();
          }}
        />
      </div>
      <div className="mt-24 ">
        <CustomButton text="Submit" />
      </div>
    </div>
  );
}

export default ResetPassword;
