import { useMutation } from "@tanstack/react-query";
import { signUpNewUser } from "../services";
import { IUser } from "./types";

export const useSignUpNewUser = () => {
  return useMutation({
    mutationFn: (data: { newUserData: IUser }) =>
      signUpNewUser(data.newUserData),
  });
};
