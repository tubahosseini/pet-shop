import React from "react";
import { Pets } from "@mui/icons-material";
import ChangeAuth from "../ChangeAuth";
import { Box, Button, TextField, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { useSignInUser } from "../hooks";
import { routes } from "@/constants/routes";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/router";
import {
  buttonSubmitStyles,
  iconBoxStyles,
  innerBoxStyles,
  outerBoxStyles,
  textFieldStyles,
  typographyHiStyles,
  typographyInfoStyles,
} from "../styles/auth.styles";
import { setCookie } from "cookies-next";

const SignIn: React.FC = () => {
  const router = useRouter();
  const { mutate } = useSignInUser();
  const { handleSubmit, control } = useForm();

  const onSubmit = (formData: any) => {
    mutate(formData, {
      onSuccess: (response) => {
        setCookie("role", response.data.user.role);
        router.push(routes.home);
        toast.success(`Welcome back ${response.data.user.username}`);
      },
      onError: (error: any) => {
        if (error.response?.status === 401) {
          toast.error("Invalid username or password.");
        } else {
          console.error("Sign-in failed:", error.message);
          toast.error("Login attempt failed. Please try again later.");
        }
      },
    });
  };

  return (
    <Box sx={outerBoxStyles}>
      <Box sx={innerBoxStyles}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={iconBoxStyles}>
            <Pets sx={{ color: "primary.dark", fontSize: 40 }} />
            <Typography sx={typographyHiStyles}>Hi!</Typography>
            <Typography sx={typographyInfoStyles}>
              Please enter the information you entered while registering.
            </Typography>
          </Box>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                sx={textFieldStyles}
                type="text"
                label="Username"
                required
                fullWidth
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                sx={textFieldStyles}
                type="password"
                label="Password"
                required
                fullWidth
              />
            )}
          />
          <Button type="submit" sx={buttonSubmitStyles}>
            Sign In
          </Button>
        </form>
      </Box>
      <ChangeAuth pText="Don't have an account?" buttonText="Sign Up" />
    </Box>
  );
};

export default SignIn;
