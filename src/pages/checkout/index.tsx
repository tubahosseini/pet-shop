import React from "react";
import PrimaryLayout from "@/layout/PrimaryLayout";
import { ReactElement } from "react";
import Checkout from "@/components/checkout/Checkout";

export default function CheckoutPage() {
  return <Checkout />;
}

CheckoutPage.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
