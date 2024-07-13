import React from "react";
import { Pets } from "@mui/icons-material";
import ChangeAuth from "../ChangeAuth";
import TextFieldAuth from "../TextFieldAuth";
import { Box, Typography } from "@mui/material";
import ButtonAuth from "../ButtonAuth";
import {
  outerBoxStyles,
  innerBoxStyles,
  iconBoxStyles,
  typographyHiStyles,
  typographyInfoStyles,
  formContainerStyles,
  inputBoxStyles,
} from "./SignUpStyles";

const SignUp: React.FC = () => {
  return (
    <Box sx={outerBoxStyles}>
      <Box sx={innerBoxStyles}>
        <Box sx={iconBoxStyles}>
          <Pets sx={{ color: "primary.dark", fontSize: 40 }} />
          <Typography sx={typographyHiStyles}>Hi!</Typography>
          <Typography sx={typographyInfoStyles}>
            Please enter the information below.
          </Typography>
        </Box>
        <Box sx={formContainerStyles}>
          <Box sx={inputBoxStyles}>
            <TextFieldAuth type="text" label="First name" />
            <TextFieldAuth type="text" label="Last name" />
          </Box>
          <Box sx={inputBoxStyles}>
            <TextFieldAuth type="text" label="Username" />
            <TextFieldAuth type="password" label="Password" />
          </Box>
          <TextFieldAuth type="text" label="Phone number" />
          <TextFieldAuth type="text" label="Address" />
          <ButtonAuth text="Sign Up" />
        </Box>
      </Box>
      <ChangeAuth pText="Already have an account?" buttonText="Sign In" />
    </Box>
  );
};

export default SignUp;
