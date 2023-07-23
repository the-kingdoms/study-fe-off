import InputField from "./UI/InputField";
import BlueButton from "./UI/BlueButton";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div
      className="flex flex-col
 justify-center items-center"
    >
      <div className="w-[800px] h-[40px] flex flex-col justify-center items-center text-6xl font-bold">
        Create Account
      </div>
      <form>
        <div className="w-[800px] h-[276px] flex flex-col justify-center items-center mt-[60px]">
          <div className="w-[600px] h-[48px] ">
            <InputField text="Email" />
          </div>
          <div className="w-[600px] h-[48px] mt-[24px]">
            <InputField text="Password" />
          </div>
          <div className="w-[600px] h-[48px] mt-[24px]">
            <InputField text="Password Confirm" />
          </div>
          <div className="w-[600px] h-[60px] mt-[24px]">
            <BlueButton
              text="Sign Up"
              className=" flex flex-row justify-center items-center  rounded-lg"
            ></BlueButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
