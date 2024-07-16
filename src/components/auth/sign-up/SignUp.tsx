import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Pets } from "@mui/icons-material";
import ChangeAuth from "../ChangeAuth";
import {
  Box,
  Button,
  MobileStepper,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import {
  outerBoxStyles,
  innerBoxStyles,
  iconBoxStyles,
  typographyHiStyles,
  typographyInfoStyles,
  textFieldStyles,
  buttonSubmitStyles,
  mobileStepperStyles,
} from "../styles/auth.styles";
import { useSignUpNewUser } from "../hooks";
import validationSchema from "./validationSchema";

interface SignUpFormInputs {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  phoneNumber: string;
  address: string;
}

const SignUp: React.FC = () => {
  // stepper functionality
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const { mutate } = useSignUpNewUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
    mutate(
      {
        newUserData: data,
      },
      {
        onSuccess: () => {
          toast.success(`You are successfully signed up ${data.username}`);
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
        <form onSubmit={handleSubmit(onSubmit)}>
          {activeStep === 0 && (
            <>
              <Controller
                name="firstname"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={textFieldStyles}
                    type="text"
                    label="First name"
                    error={!!errors.firstname}
                    helperText={errors.firstname?.message}
                    required
                    fullWidth
                  />
                )}
              />
              <Controller
                name="lastname"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={textFieldStyles}
                    type="text"
                    label="Last name"
                    error={!!errors.lastname}
                    helperText={errors.lastname?.message}
                    required
                    fullWidth
                  />
                )}
              />
              <Controller
                name="username"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={textFieldStyles}
                    type="text"
                    label="Username"
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    required
                    fullWidth
                  />
                )}
              />
            </>
          )}
          {activeStep === 1 && (
            <>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={textFieldStyles}
                    type="password"
                    label="Password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    required
                    fullWidth
                  />
                )}
              />
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={textFieldStyles}
                    type="text"
                    label="Phone number"
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber?.message}
                    required
                    fullWidth
                    inputProps={{ maxLength: 11 }} // prevent the user from entering more than 11 digits
                    onChange={(e) => {
                      // to ensure that only numeric digits are entered by the user
                      const value = e.target.value;
                      const regex = /^[0-9]+$/;
                      if (value === "" || regex.test(value)) {
                        // value === "" allows the input field to be cleared by the user
                        field.onChange(e);
                      }
                    }}
                  />
                )}
              />
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={textFieldStyles}
                    type="text"
                    label="Address"
                    error={!!errors.address}
                    helperText={errors.address?.message}
                    required
                    fullWidth
                  />
                )}
              />
              <Button type="submit" sx={buttonSubmitStyles}>
                Sign Up
              </Button>
            </>
          )}
        </form>
        <MobileStepper
          variant="dots"
          steps={2}
          position="static"
          activeStep={activeStep}
          sx={mobileStepperStyles}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === 1}
            >
              Next
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Back
            </Button>
          }
        />
      </Box>
      <ChangeAuth pText="Already have an account?" buttonText="Sign In" />
    </Box>
  );
};

export default SignUp;
