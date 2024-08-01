import { getAllCategories, getAllProducts, getProductById } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  });
};

export const useGetProductById = (id: any) => {
  return useQuery({
    queryKey: ["singleProduct", id],
    queryFn: () => getProductById(id),
  });
};

export const useGetAllCategories = () => {
  return useQuery({
    queryKey: ["allCategories"],
    queryFn: getAllCategories,
  });
};
