import React from "react";
import { FaPaw } from "react-icons/fa";
import AuthButton from "../AuthButton";
import ChangeAuth from "../ChangeAuth";
import TextFieldAuth from "../TextFieldAuth";
import { Box, Typography } from "@mui/material";

const SignUp: React.FC = () => {
  return (
    <Box className="flex flex-col sm:flex-row h-screen overflow-hidden">
      <Box className="flex flex-col sm:w-1/2 p-4 sm:p-10 items-center justify-center">
        <Box className="flex flex-col items-center">
          <FaPaw size={30} className="text-orange-400" />
          <Typography className="text-xl font-bold text-purple-600">
            Hi!
          </Typography>
          <Typography>Please enter the information below.</Typography>
        </Box>
        <Box className="flex flex-col gap-2 w-full mt-4">
          <Box className="flex gap-2 w-full">
            <TextFieldAuth type="text" label="First name" />
            <TextFieldAuth type="text" label="Last name" />
          </Box>
          <Box className="flex gap-2 w-full">
            <TextFieldAuth type="text" label="Username" />
            <TextFieldAuth type="password" label="Password" />
          </Box>
          <TextFieldAuth type="text" label="Phone number" />
          <TextFieldAuth type="text" label="Address" />
          <AuthButton text="Sign Up" />
        </Box>
      </Box>
      <ChangeAuth pText="Already have an account?" buttonText="Sign In" />
    </Box>
  );
};

export default SignUp;
