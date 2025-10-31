import React from "react";

interface LegacyButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "secondaryInverted" | "secondaryNavbarLight";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function LegacyButton({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: LegacyButtonProps) {
  const baseClasses =
    "font-medium transition-all duration-200 inline-flex items-center justify-center border border-transparent disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-[#24823D] hover:bg-white active:bg-[#1a5c2e] text-white hover:text-[#0E1821] active:text-white hover:border-[#000000] hover:border-1 hover:shadow-[2px_2px_0px_0px_#24823d] shadow-[1px_2px_0px_0px_#E8F6E2]",
    secondary:
      "bg-white text-[#0E1821] hover:bg-[#248238] hover:text-white rounded-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.33)]",
    secondaryInverted:
      "bg-[#248238] text-white border rounded-[12px] hover:bg-white hover:text-[#0E1821] transition-colors shadow-[0_4px_4px_rgba(0,0,0,0.20)]",
    secondaryNavbarLight:
      "bg-[#0E1821] text-white hover:bg-[#248238] hover:text-white rounded-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.33)]",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm rounded-xl",
    md: "px-8 py-3 text-base rounded-xl",
    lg: "px-6 py-4 sm:px-8 sm:py-[22px] text-sm sm:text-[18px] rounded-xl w-[200px] sm:w-[180px]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} cursor-pointer`}
      style={{
        gap: "10.396px",
      }}
    >
      {children}
    </button>
  );
}
