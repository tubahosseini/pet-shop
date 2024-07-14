// the purple section in Auth page

import React from "react";
import Image from "next/image";
import animals from "@/assets/images/auth/animals.svg";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { Box, Button, Typography } from "@mui/material";
import {
  changeAuthButtonStyles,
  ChangeAuthContainer,
  imageBoxStyles,
} from "./styles/auth.styles";

interface ChangeAuthProps {
  pText: string;
  buttonText: string;
}

const ChangeAuth: React.FC<ChangeAuthProps> = ({ pText, buttonText }) => {
  return (
    <Box sx={ChangeAuthContainer}>
      <Typography sx={{ color: "primary.light", mb: 1 / 2 }}>
        {pText}
      </Typography>
      <Link href={buttonText === "Sign Up" ? routes.signUp : routes.signIn}>
        <Button sx={changeAuthButtonStyles}>{buttonText}</Button>
      </Link>
      <Box sx={imageBoxStyles}>
        <Image src={animals} alt="animals" layout="fill" objectFit="contain" />
      </Box>
    </Box>
  );
};

export default ChangeAuth;
