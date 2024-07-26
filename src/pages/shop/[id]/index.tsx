import React from "react";
import PrimaryLayout from "@/layout/PrimaryLayout";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import SingleProduct from "@/components/shop/single-product/SingleProduct";

export default function SingleProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return <SingleProduct id={id} />;
}

SingleProductPage.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
