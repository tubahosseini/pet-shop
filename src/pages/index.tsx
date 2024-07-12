import PrimaryLayout from "@/layout/PrimaryLayout";
import React from "react";
import { ReactElement } from "react";

export default function HomePage() {
  return <div>HomePage</div>;
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
