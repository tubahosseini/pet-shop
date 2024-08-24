import React from "react";
import PrimaryLayout from "@/layout/PrimaryLayout";
import { ReactElement } from "react";
import { Box } from "@mui/material";

export default function ContactUsPage() {
  return <Box sx={{ mt: 12 }}>ContactUsPage</Box>;
}

ContactUsPage.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
