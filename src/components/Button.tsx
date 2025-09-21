import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "navbar";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "font-medium transition-all duration-200 inline-flex items-center justify-center border border-transparent disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-[#24823D] hover:bg-white active:bg-[#1a5c2e] text-white hover:text-[#0E1821] active:text-white hover:border-[#85c970]",
    secondary:
      "bg-[#41B36B] hover:bg-white active:bg-[#369856] text-white hover:text-[#0E1821] active:text-white hover:border-[#85c970]",
    navbar:
      "bg-white hover:bg-[#24823D] active:bg-[#1a5c2e] text-[#0E1821] hover:text-white active:text-white hover:border-[#41B36B]",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-8 py-3 text-base rounded-lg",
    lg: "px-6 py-4 sm:px-8 sm:py-[22px] text-sm sm:text-base rounded-xl w-[200px] sm:w-[180px]",
  };

  const lgShadow =
    size === "lg" ? { boxShadow: "1px 2px 0px 0px #E8F6E2" } : {};

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      style={{
        ...lgShadow,
      }}
    >
      {children}
    </button>
  );
}
