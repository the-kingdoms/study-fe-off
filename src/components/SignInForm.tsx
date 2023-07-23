import BlueButton from "./BlueButton";
import InputField from "./InputField";
import { Link } from "react-router-dom";
const SignInForm = () => {
  return (
    <div
      className="flex flex-col
     justify-center items-center"
    >
      <div className="w-[800px] h-[40px] flex flex-col justify-center items-center text-6xl">
        sign in
      </div>
      <form>
        <div className="w-[800px] h-[263px] flex flex-col justify-center items-center">
          <div className="w-[600px] h-[48px] mt-[60px]">
            <InputField text="Email" />
          </div>
          <div className="w-[600px] h-[48px] mt-[24px]">
            <InputField text="Password" />
          </div>
          <div className="w-[600px] h-[60px] mt-[24px]">
            <BlueButton
              text="Sign Up"
              className=" flex flex-row justify-center items-center  rounded-lg"
            ></BlueButton>
          </div>
        </div>
      </form>
      <div className="flex flex-row justify-center items-center mt-[19px]">
        <div className="mr-[10px]">Don’t have an account? </div>
        <Link to={{}}>Sign Up Here</Link>
      </div>
    </div>
  );
};
export default SignInForm;
