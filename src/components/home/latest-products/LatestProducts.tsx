import ProductCard from "@/components/shared/ProductCard";
import { useGetAllProducts } from "@/hooks";
import React from "react";

export default function LatestProducts() {
  const { data } = useGetAllProducts();

  const latestProducts = data?.data.products
    .filter((product: any) => product.category && product.category.createdAt)
    .sort((a: any, b: any) => {
      const dateA = new Date(a.category.createdAt);
      const dateB = new Date(b.category.createdAt);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 10);

  return (
    <>
      {latestProducts?.map((product: any) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </>
  );
}
