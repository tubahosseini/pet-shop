import { IUser, IUserSignInForm } from "../hooks/types";
import { api } from "@/services/api.config";

export const signUpNewUser = async (newUserData: IUser) => {
  try {
    const userResponse = await api.post(`/auth/signup`, newUserData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return {
      user: userResponse.data,
    };
  } catch (error) {
    throw error;
  }
};

export const signInUser = async (data: IUserSignInForm) => {
  try {
    const response = await api.post(`/auth/login`, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("Error response:", error.response.data);
    }
    throw error;
  }
};
