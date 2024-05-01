/* eslint-disable react/button-has-type */
import React from "react";
import { BTN_META } from "@/lib/enum";

const Button = ({
  disabled = false,
  loading = false,
  text,
  variation = "PRIMARY",
  onClickFn,
  customClassName,
  children,
  type
}) => {
  const { className } = BTN_META[variation];
  return (
    <button
      disabled={disabled}
      onClick={() => onClickFn && onClickFn()}
      type={type || "button"}
      className={`flex h-fit justify-center rounded border-none px-4 py-2.5 font-semibold
        transition-opacity duration-300 
        hover:translate-y-[-1px] hover:opacity-80 
        active:translate-y-0 active:opacity-70 
        disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50 ${className} ${
          customClassName || ""
        }`}
    >
      {loading ? (
        <svg
          className={`h-6 w-6 animate-spin text-white ${
            variation === "EMPTY" ? "text-gray" : "text-white"
          }`}
          viewBox="0 0 24 24"
        >
          <circle
            className={`${variation === "EMPTY" ? "opacity-0" : "opacity-25"}`}
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        text || children
      )}
    </button>
  );
};

export default Button;
