import React from "react";
import { Pets } from "@mui/icons-material";
import ChangeAuth from "../ChangeAuth";
import TextFieldAuth from "../TextFieldAuth";
import { Box, Typography } from "@mui/material";
import ButtonAuth from "../ButtonAuth";

const SignIn: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirectionn: {
          xs: "column", // mobile devices
          sm: "row", // tablets and up
        },
        height: "100vh",
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          p: 4,
          justifyContent: {
            sm: "center", // tablets and up
          },
          mt: {
            xs: 3,
            sm: 0,
          },
          width: {
            sm: "50%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Pets sx={{ color: "primary.dark", fontSize: 40 }} />
          <Typography
            sx={{ color: "primary.main", fontSize: 30, fontWeight: "bold" }}
          >
            Hi !
          </Typography>
          <Typography sx={{ color: "primary.main" }}>
            Please enter the information you entered while registering.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            mt: 2,
            width: "100%",
          }}
        >
          <TextFieldAuth type="text" label="username" />
          <TextFieldAuth type="password" label="password" />
          <ButtonAuth text="Sign Up" />
        </Box>
      </Box>
      <ChangeAuth pText="Don't have an account?" buttonText="Sign Up" />
    </Box>
  );
};

export default SignIn;
