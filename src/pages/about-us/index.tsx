import React from "react";
import PrimaryLayout from "@/layout/PrimaryLayout";
import { ReactElement } from "react";
import { Box } from "@mui/material";

export default function AboutUsPage() {
  return <Box sx={{ mt: 12 }}>About Us Page</Box>;
}

AboutUsPage.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
