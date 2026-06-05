import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20",
    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100",
  };

  return (
    <button
      className={`
        inline-flex items-center justify-center
        rounded-xl px-6 py-3
        text-sm font-semibold
        transition-all duration-300
        hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-blue-500
        disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}