import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-5 py-2 rounded-xl bg-[#b47b48] hover:bg-[#a46e3f] text-white transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
