import { api } from "./api.config";

export const getAllProducts = async (): Promise<any> => {
  try {
    const response = await api.get(`/products?page=1&limit=30`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data);
    }
    throw error;
  }
};

export async function getProductById(id: any): Promise<any> {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error(error.response.data);
    }
    throw error;
  }
}
