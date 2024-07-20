import { useMutation } from "@tanstack/react-query";
import { signInUser, signUpNewUser } from "../services";
import { IUser, IUserSignInForm } from "./types";

export const useSignUpNewUser = () => {
  return useMutation({
    mutationFn: (data: { newUserData: IUser }) =>
      signUpNewUser(data.newUserData),
  });
};

export const useSignInUser = () => {
  return useMutation({
    mutationFn: (data: IUserSignInForm) => signInUser(data),
  });
};
