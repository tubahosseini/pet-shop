import ProductCard from "@/components/shared/ProductCard";
import { useGetAllProducts } from "@/hooks";
import React from "react";

export default function LatestProducts() {
  const { data } = useGetAllProducts();
  const latestProducts = data?.data.products.slice(-10).reverse(); // Get the last 10 products

  return (
    <>
      {latestProducts?.map((product: any) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </>
  );
}
