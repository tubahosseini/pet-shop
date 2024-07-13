import React from "react";

interface AuthButtonProps {
  text: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

const AuthButton: React.FC<AuthButtonProps> = ({
  text,
  fullWidth = false,
  onClick,
}) => {
  return (
    <button
      className={`bg-orange-400 text-white text-xs py-2 px-12 my-1 rounded-full ${
        fullWidth ? "w-full" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default AuthButton;
