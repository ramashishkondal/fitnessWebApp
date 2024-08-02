import CustomButton from '../../Components/Atoms/CustomButton';
import CustomTextInput from '../../Components/Atoms/CustomTextInput';
import HeadingText from '../../Components/Atoms/HeadingText';

function Login() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-1 w-90 px-24 py-10 rounded-md my-24 bg-slate-200 flex-col md:w-[60%] ">
        <HeadingText text="LOG IN" />
        <CustomTextInput placeholder="email" />
        <CustomTextInput placeholder="password" />
        <CustomButton text="Log in" onPress={() => alert('log in pressed')} />
      </div>
    </div>
  );
}

export default Login;
