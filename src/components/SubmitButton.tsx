import { ReactNode } from "react";

interface SubmitButtonProps {
  children: ReactNode;
  disabled?: boolean;
  isSubmitting?: boolean;
}
export const SubmitButton = ({ children, disabled }: SubmitButtonProps) => {
  return (
    <button
      className={`font-medium text-white p-3 rounded-md ${
        disabled ? "bg-gray-700 cursor-not-allowed" : "bg-black"
      }`}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
};
