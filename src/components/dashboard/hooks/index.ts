import {
  addNewProduct,
  getAllOrders,
  removeProductById,
} from "@/components/dashboard/services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { IProduct } from "./types";

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

export const useAddNewProduct = () => {
  return useMutation({
    mutationFn: (data: { newProductData: IProduct }) =>
      addNewProduct(data.newProductData),
  });
};
