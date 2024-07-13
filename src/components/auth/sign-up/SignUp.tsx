import React from "react";
import { Pets } from "@mui/icons-material";
import ChangeAuth from "../ChangeAuth";
import TextFieldAuth from "../TextFieldAuth";
import { Box, Typography } from "@mui/material";
import ButtonAuth from "../ButtonAuth";

const SignUp: React.FC = () => {
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
            Hi!
          </Typography>
          <Typography sx={{ color: "primary.main" }}>
            Please enter the information below.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            width: "100%",
            flexDirection: "column",
            mt: 1,
          }}
        >
          <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
            <TextFieldAuth type="text" label="First name" />
            <TextFieldAuth type="text" label="Last name" />
          </Box>
          <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
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
