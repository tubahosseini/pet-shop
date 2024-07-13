import { BASE_URL } from "@/constants/urls";
import axios from "axios";
import { IUser } from "../hooks/types";

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
