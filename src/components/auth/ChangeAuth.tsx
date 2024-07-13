// the purple section in Auth page

import React from "react";
import Image from "next/image";
import animals from "@/assets/images/auth/animals.svg";
import { routes } from "@/constants/routes";
import Link from "next/link";
import AuthButton from "./ButtonAuth";
import { Box, Typography } from "@mui/material";

interface ChangeAuthProps {
  pText: string;
  buttonText: string;
}

const ChangeAuth: React.FC<ChangeAuthProps> = ({ pText, buttonText }) => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%", // mobile devices
          sm: "50%", // tablets and up
        },
        bgcolor: "primary.main",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: {
          xs: "start", // mobile devices
          sm: "center", // tablets and up
        },
        position: {
          xs: "fixed", // mobile devices
          sm: "relative", // tablets and up
        },
        bottom: 0,
        p: 1,
        height: {
          xs: 190, // mobile devices
          sm: "auto", // tablets and up
        },
        borderTopLeftRadius: {
          xs: 80, // mobile devices
          sm: 0, // tablets and up
        },
        borderTopRightRadius: {
          xs: 80, // mobile devices
          sm: 0, // tablets and up
        },
        borderBottomLeftRadius: {
          xs: 0, // mobile devices
          sm: 80, // tablets and up
        },
      }}
    >
      <Typography sx={{ color: "primary.light", mb: 1 / 2 }}>
        {pText}
      </Typography>
      <Link href={buttonText === "Sign Up" ? routes.signUp : routes.signIn}>
        <AuthButton text={buttonText} />
      </Link>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          mt: 2,
          width: {
            xs: "250px", // mobile devices
            sm: "380px", // tablets and up
          },
          height: {
            xs: "115px", // mobile devices
            sm: "135px", // tablets and up
            md: "200px",
          },
        }}
      >
        <Image src={animals} alt="animals" layout="fill" objectFit="contain" />
      </Box>
    </Box>
  );
};

export default ChangeAuth;
