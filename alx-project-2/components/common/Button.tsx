// components/common/Button.tsx
import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
}) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  const classes = `bg-blue-500 text-white font-bold hover:bg-blue-700 transition-colors ${sizeClasses[size]} ${shapeClasses[shape]}`;

  return (
    <button className={classes} onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
