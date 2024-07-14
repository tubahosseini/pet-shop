import { BASE_URL } from "@/constants/urls";
import axios from "axios";
import { IUser, IUserSignInForm } from "../hooks/types";

export const signUpNewUser = async (newUserData: IUser) => {
  try {
    const userResponse = await axios.post(
      `${BASE_URL}/auth/signup`,
      newUserData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      user: userResponse.data,
    };
  } catch (error) {
    throw error;
  }
};

export const signInUser = async (data: IUserSignInForm) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("Error response:", error.response.data);
    }
    throw error;
  }
};
