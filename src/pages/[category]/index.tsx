import React from "react";
import PrimaryLayout from "@/layout/PrimaryLayout";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import ShopBasedOnCategory from "@/components/home/shop-based-on-category/ShopBasedOnCategory";

export default function ShopBasedOnCategoryPage() {
  const router = useRouter();
  const { category } = router.query;

  return <ShopBasedOnCategory category={category} />;
}

ShopBasedOnCategoryPage.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
