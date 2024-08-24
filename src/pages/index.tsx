import React from "react";
import PrimaryLayout from "@/layout/PrimaryLayout";
import { ReactElement } from "react";
import Home from "@/components/home/Home";

export default function HomePage() {
  return <Home />;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
