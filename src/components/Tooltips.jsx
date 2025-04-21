import React from "react";

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative group cursor-pointer">
      {children}
      <div className="absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <div className="bg-[#6A874C] text-white text-sm p-6 rounded-xl max-w-xs text-center">
          {text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#6A874C]" />
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
