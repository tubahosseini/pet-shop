// the purple section in Auth page

import React from "react";
import Image from "next/image";
import animals from "@/assets/images/auth/animals.svg";
import { routes } from "@/constants/routes";
import Link from "next/link";
import AuthButton from "./AuthButton";

interface ChangeAuthProps {
  pText: string;
  buttonText: string;
}

const ChangeAuth: React.FC<ChangeAuthProps> = ({ pText, buttonText }) => {
  return (
    <div className="w-full sm:w-1/2 sm:bg-purple-600 flex flex-col items-center justify-start sm:justify-center p-4 sm:relative sm:h-auto fixed bottom-0 bg-purple-600 h-[200px] rounded-t-[80px] sm:rounded-t-none sm:rounded-l-[80px]">
      <p className="mb-1 text-white">{pText}</p>
      <Link href={buttonText === "Sign Up" ? routes.signUp : routes.signIn}>
        <AuthButton text={buttonText} />
      </Link>
      <div className="absolute bottom-0 w-[250px] h-[115px] md:w-[380px] md:h-[135px] lg:w-[380px] lg:h-[200px] mt-4">
        <Image src={animals} alt="animals" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default ChangeAuth;
