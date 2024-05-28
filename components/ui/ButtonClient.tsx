"use client"
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const ButtonClient: React.FC<ButtonProps> = ({ variant = "primary", children, ...props }) => {
  const baseStyle = "px-4 py-2 rounded focus:outline-none focus:ring";
  const variantStyle =
    variant === "primary"
      ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300"
      : "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300";

  return (
    <button className={`${baseStyle} ${variantStyle}`} {...props}>
      {children}
    </button>
  );
};

export default ButtonClient;
