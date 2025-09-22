import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
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
      "bg-white text-[#0E1821] hover:bg-[#248238] hover:text-white rounded-[12px]",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-xl",
    md: "px-8 py-3 text-base rounded-xl",
    lg: "px-6 py-4 sm:px-8 sm:py-[22px] text-sm sm:text-[18px] rounded-xl w-[200px] sm:w-[180px]",
  };

  const lgShadow =
    size === "lg" ? { boxShadow: "1px 2px 0px 0px #E8F6E2" } : {};
  const secondaryShadow =
    variant === "secondary"
      ? { boxShadow: "0 4px 4px rgba(0, 0, 0, 0.33)" }
      : {};

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      style={{
        gap: "10.396px",
        ...lgShadow,
        ...secondaryShadow,
      }}
    >
      {children}
    </button>
  );
}
