export interface IUser {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  phoneNumber: string | number; //! why do i have to set number here for regex validation in sig in form?
  address: string;
}
export interface IUserSignInForm {
  username: string;
  password: string;
}
