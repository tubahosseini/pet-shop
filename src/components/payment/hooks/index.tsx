import { useMutation } from "@tanstack/react-query";
import { addNewOrder } from "../services";

export const useAddNewOrder = () => {
  return useMutation({
    mutationKey: ["addNewProduct"],
    mutationFn: addNewOrder,
  });
};
