export interface IUser {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  phoneNumber: number | string; //! fix the type
  address: string;
}
export interface IUserSignInForm {
  username: string;
  password: string;
}
