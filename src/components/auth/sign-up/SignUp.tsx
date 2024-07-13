import React, { useState } from "react";
import { Pets } from "@mui/icons-material";
import ChangeAuth from "../ChangeAuth";
import { Box, TextField, Typography } from "@mui/material";
import ButtonAuth from "../ButtonAuth";
import { toast } from "react-toastify";
import {
  outerBoxStyles,
  innerBoxStyles,
  iconBoxStyles,
  typographyHiStyles,
  typographyInfoStyles,
  formContainerStyles,
  inputBoxStyles,
} from "./SignUpStyles";
import { useSignUpNewUser } from "../hooks";

const SignUp = () => {
  const { mutate } = useSignUpNewUser();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    mutate(
      {
        newUserData: userData,
      },
      {
        onSuccess: () => {
          toast.success(`You are successfully signed up ${userData.username}`);
        },
        onError: (error) => {
          toast.error("Sign up failed");
          console.error(error.message);
        },
      }
    );
  };

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
            <TextField
              type="text"
              label="First name"
              name="firstname"
              value={userData.firstname}
              onChange={handleChange}
            />
            <TextField
              type="text"
              label="Last name"
              name="lastname"
              value={userData.lastname}
              onChange={handleChange}
            />
          </Box>
          <Box sx={inputBoxStyles}>
            <TextField
              type="text"
              label="Username"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
            <TextField
              type="password"
              label="Password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </Box>
          <TextField
            type="number"
            label="Phone number"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleChange}
          />
          <TextField
            type="text"
            label="Address"
            name="address"
            value={userData.address}
            onChange={handleChange}
          />
          <ButtonAuth text="Sign Up" onClick={handleSubmit} />
        </Box>
      </Box>
      <ChangeAuth pText="Already have an account?" buttonText="Sign In" />
    </Box>
  );
};

export default SignUp;
