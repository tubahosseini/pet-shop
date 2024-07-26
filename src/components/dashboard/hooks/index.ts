import { getAllOrders } from "@/components/dashboard/services";
import { useQuery } from "@tanstack/react-query";

export const useGetAllOrders = () => {
  return useQuery({
    queryKey: ["allOrders"],
    queryFn: getAllOrders,
  });
};
