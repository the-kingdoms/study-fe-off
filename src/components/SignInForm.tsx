import BlueButton from "./UI/BlueButton";
import InputField from "./UI/InputField";
import { Link, useNavigate } from "react-router-dom";

const SignInForm = () => {
  const navigate = useNavigate();
  const SignIn = () => {
    navigate("/3");
  };

  return (
    <div
      className="flex flex-col
     justify-center items-center"
    >
      <div className="w-[800px] h-[40px] flex flex-col justify-center items-center text-6xl font-bold">
        sign in
      </div>
      <form>
        <div className="w-[800px] h-[263px] flex flex-col justify-center items-center mt-[60px]">
          <div className="w-[600px] h-[48px] ">
            <InputField text="Email" />
          </div>
          <div className="w-[600px] h-[48px] mt-[24px]">
            <InputField text="Password" />
          </div>
          <div className="w-[600px] h-[60px] mt-[24px]">
            <BlueButton
              onClick={SignIn}
              text="Sign Up"
              className=" flex flex-row justify-center items-center rounded-lg"
            ></BlueButton>
          </div>
        </div>
      </form>
      <div className="flex flex-row justify-center items-center mt-[19px]">
        <div className="mr-[10px]">Don’t have an account? </div>
        <Link to={"/2"} className="text-sky-400">
          Sign Up Here
        </Link>
      </div>
    </div>
  );
};
export default SignInForm;
