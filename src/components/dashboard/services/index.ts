import { api } from "../../../services/api.config";

export const getAllOrders = async (): Promise<any> => {
  try {
    const response = await api.get(`/orders`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("error is:", error.response.data);
    }
    throw error;
  }
};

export const removeProductById = async (id: string): Promise<any> => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("Error is:", error.response.data);
    }
    throw error;
  }
};
