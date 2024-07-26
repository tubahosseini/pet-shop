import {
  getAllOrders,
  removeProductById,
} from "@/components/dashboard/services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetAllOrders = () => {
  return useQuery({
    queryKey: ["allOrders"],
    queryFn: getAllOrders,
  });
};

export const useRemoveProductById = () => {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["allProducts"] });
  return useMutation({
    mutationKey: ["removeProductById"],
    mutationFn: removeProductById,
  });
};
