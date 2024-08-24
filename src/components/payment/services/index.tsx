import { api } from "@/services/api.config";

export const addNewOrder = async (newOrderData: any) => {
  try {
    const userResponse = await api.post(`/orders`, newOrderData);
    return userResponse;
  } catch (error) {
    throw error;
  }
};
