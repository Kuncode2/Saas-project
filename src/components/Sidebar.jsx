import React, { useState } from "react";
import Home from "../svg/home";
import Star from "../svg/Star";
import Unick from "../svg/Unick";

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { icon: Home, label: "Dashboard" },
    { icon: Star, label: "Surveys" },
    { icon: Unick, label: "Integrations" },
  ];

  const bottomMenuItems = [
    {
      icon: "/Asserts/questionmark.svg",
      label: "Help Centre",
      type: "img",
    },
    {
      icon: "/Asserts/setting.svg",
      label: "Settings",
      type: "img",
    },
    {
      icon: "/Asserts/Screenshot 2024-12-05 145104.png",
      label: "Terry's",
      type: "profile",
    },
  ];

  return (
    <div className=" bg-white flex flex-col border-r m-3 justify-between h-[100vh] sticky top-0">
      <div className="h-[259px] w-full pt-[16px] pb-[16px] gap-[36px]">
        <div className="w-[240px] h-[47px] pt-[8px] pr-[44px] pb-[8px] pl-[20px] gap-[12px] flex items-center">
          <img
            src="/Asserts/logo.png"
            alt="impimages"
            className="h-[31px] pl-3 "
          />
          <span className="text-[26px] pb-1 pl-1 font-semibold text-[background: #1E1E1E]">
            compra
          </span>
        </div>
        <div className="w-full h-[144px] gap-[6px]">
          <nav className="m-4 pl-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                className="flex items-center p-2 font-medium rounded-lg hover:bg-black hover:text-white"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="w-20px h-[20px] mr-3">
                  <item.icon dark={hoveredItem !== index} />
                </div>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="w-full h-[120px] gap-[6px] pl-3">
        <div className="flex flex-col space-y-4 px-6 pb-6">
          {bottomMenuItems.map((item, index) => (
            <a
              key={index}
              className="flex items-center text-sm font-medium hover:text-orange-500"
            >
              {item.type === "profile" ? (
                <span className="mr-3">
                  <img
                    src={item.icon}
                    alt="profile"
                    className="w-[28px] h-[28px] rounded-[26px] gap-[8px]"
                  />
                </span>
              ) : (
                <div className="w-20px h-[20px] mr-3">
                  <img src={item.icon} alt={item.label} />
                </div>
              )}
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
