import { getAllProducts, getAllOrders } from "@/components/dashboard/services";
import { useQuery } from "@tanstack/react-query";

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  });
};

export const useGetAllOrders = () => {
  return useQuery({
    queryKey: ["allOrders"],
    queryFn: getAllOrders,
  });
};
