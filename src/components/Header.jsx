import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-[781px] h-[104px] pt-[40px] pb-[32px]">
      <h1 className="text-2xl font-semibold flex items-center">
        Welcome, Aanchal! <span className="ml-2">👋</span>
      </h1>
      <button className="px-4 py-2 bg-white border rounded-[10px] shadow-sm text-sm font-medium hover:bg-gray-100">
        😊 Drop a review
      </button>
    </div>
  );
};

export default Header;
