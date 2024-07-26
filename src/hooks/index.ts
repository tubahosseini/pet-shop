import { getAllProducts } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  });
};
