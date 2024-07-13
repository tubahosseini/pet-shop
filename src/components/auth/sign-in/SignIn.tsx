import React from "react";
import { Pets } from "@mui/icons-material";
import ChangeAuth from "../ChangeAuth";
import { Box, TextField, Typography } from "@mui/material";
import ButtonAuth from "../ButtonAuth";
import {
  outerBoxStyles,
  innerBoxStyles,
  iconBoxStyles,
  typographyHiStyles,
  typographyInfoStyles,
  formContainerStyles,
  textFieldStyles,
} from "./SignInStyles";

const SignIn: React.FC = () => {
  return (
    <Box sx={outerBoxStyles}>
      <Box sx={innerBoxStyles}>
        <Box sx={iconBoxStyles}>
          <Pets sx={{ color: "primary.dark", fontSize: 40 }} />
          <Typography sx={typographyHiStyles}>Hi!</Typography>
          <Typography sx={typographyInfoStyles}>
            Please enter the information you entered while registering.
          </Typography>
        </Box>
        <Box sx={formContainerStyles}>
          <TextField sx={textFieldStyles} type="text" label="username" />
          <TextField sx={textFieldStyles} type="password" label="password" />
          <ButtonAuth text="Sign Up" />
        </Box>
      </Box>
      <ChangeAuth pText="Don't have an account?" buttonText="Sign Up" />
    </Box>
  );
};

export default SignIn;
