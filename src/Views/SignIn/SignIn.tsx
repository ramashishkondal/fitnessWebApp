import CustomButton from '../../Components/Atoms/CustomButton';
import CustomTextInput from '../../Components/Atoms/CustomTextInput';
import { FacebookLogo, GetItOnAppStore } from '../../Shared/Constants';

function SignIn() {
  return (
    <div className="flex ">
      <div className="flex flex-1 flex-col items-center">
        <div className="flex flex-1 w-90 px-24 py-10 rounded-md my-24 bg-slate-200 flex-col md:w-[30%] ">
          <p className="rounded-md text-black text-3xl mb-8 self-center font-medium">
            LOG IN
          </p>
          <CustomTextInput placeholder="email" />
          <CustomTextInput placeholder="password" />
          <CustomButton text="Log in" onPress={() => alert('log in pressed')} />
          <div className="flex flex-1  items-center my-4">
            <div className="flex flex-1 bg-slate-300 h-[2px] rounded-md" />
            <p className="flex flex-2 px-4 rounded-md text-gray-500"> OR </p>
            <div className="flex flex-1 bg-slate-300 h-[2px] rounded-md" />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <img src={FacebookLogo} alt="facebook logo" className="size-10" />
            <p className="flex px-2 rounded-md text-blue-800 font-medium cursor-pointer">
              Log in with facebook
            </p>
          </div>
          <p className="flex flex-2 self-center my-4 px-4 rounded-md text-gray-500 text-xs cursor-pointer">
            Forgot password?
          </p>
          <div className="flex flex-col mt-16">
            <p className="self-center">
              Don&apos;t have an account?{' '}
              <span className="text-blue-300 font-medium cursor-pointer">
                Sign up
              </span>
            </p>
            <p className="self-center mt-12">Get the app.</p>
            <div className="flex items-center">
              <img
                src={GetItOnAppStore}
                alt="app store"
                className="size-36 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
