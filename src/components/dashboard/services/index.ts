import { api } from "../../../services/api.config";
import { IProduct } from "../hooks/types";

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

export const addNewProduct = async (newProductData: any) => {
  try {
    const userResponse = await api.post(`/products`, newProductData);
    return userResponse;
  } catch (error) {
    throw error;
  }
};

export const editProductById = async (editedProductData: IProduct) => {
  const { _id, ...rest } = editedProductData;
  try {
    const userResponse = await api.patch(`/products/${_id}`, rest);
    return userResponse;
  } catch (error) {
    throw error;
  }
};

export const editProductsById = async (editedProductsData: IProduct[]) => {
  const promiseAll = editedProductsData.map((item) => editProductById(item));
  const editedProducts = await Promise.all(promiseAll);
};
