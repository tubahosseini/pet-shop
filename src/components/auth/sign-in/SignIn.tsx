import React from "react";
import { FaPaw } from "react-icons/fa";
import AuthButton from "../AuthButton";
import ChangeAuth from "../ChangeAuth";
import TextFieldAuth from "../TextFieldAuth";

const SignIn: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen overflow-hidden">
      <div className="flex flex-col sm:w-1/2 p-4 sm:p-10 mt-12 items-center sm:justify-center">
        <div className="flex flex-col items-center">
          <FaPaw size={30} className="text-orange-400" />
          <h1 className="text-xl font-bold text-purple-600">Hi!</h1>
          <p className="text-xs text-purple-600">
            Please enter the information you entered while registering.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full mt-4">
          <TextFieldAuth type="text" label="username" />
          <TextFieldAuth type="password" label="password" />

          <AuthButton text="Sign Up" />
        </div>
      </div>
      <ChangeAuth pText="Don't have an account?" buttonText="Sign Up" />
    </div>
  );
};

export default SignIn;
