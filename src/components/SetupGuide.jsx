import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SetupStep from "./SetupStep";

const SetupGuide = () => {
  const [openStep, setOpenStep] = useState(0);
  const [isGuideOpen, setIsGuideOpen] = useState(true);

  const steps = [
    {
      id: 1,
      title: "Create your survey",
      completed: true,
      link: "/Asserts/impimages.png"
    },
    {
      id: 2,
      title: "Share your survey with your customers",
      completed: false,
      link: "/Asserts/impimages.png"
    },
    {
      id: 3,
      title: "Connect survey responses to your platform",
      completed: false,
      link: "/Asserts/impimages.png"
    },
    {
      id: 4,
      title: "Gather survey insights",
      completed: false,
      link: "/Asserts/impimages.png"
    }
  ];

  const loading = false;
  const error = null;

  const onToggle = (i) => {
    setOpenStep((prev) => (prev === i ? -1 : i));
  };

  const toggleGuide = () => {
    setIsGuideOpen(!isGuideOpen);
  };

  const completedSteps = steps.filter((step) => step.completed).length;

  return (
    <div className="bg-white rounded-lg shadow-md w-full max-w-[781px] p-4 sm:p-[16px] gap-[16px]">
      <div className="w-full flex justify-between items-center">
        <div className="font-semibold mb-3">Setup Guide</div>
        <div
          className="space-x-2 flex items-center cursor-pointer"
          onClick={toggleGuide}
        >
          <MoreHorizIcon fontSize="small" />
          <KeyboardArrowDownIcon
            style={{
              transform: isGuideOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
      </div>

      <div className="mb-5  flex flex-col sm:flex-row items-center w-full gap-2 sm:gap-[6px]">
        <p className="text-[14px] leading-[6px]">
          {completedSteps}/{steps.length} completed
        </p>
        <div className="bg-gray-200 rounded-full w-full sm:w-[640px] sm:ml-3 h-[8px]">
          <div
            className="bg-black h-[8px] rounded-full"
            style={{ width: `${(completedSteps / steps.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isGuideOpen
            ? "max-h-[2000px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-3">
          {loading && <div>Loading...</div>}
          {error && <div className="text-red-500">Error: {error}</div>}
          {!loading &&
            !error &&
            steps.map((step) => (
              <SetupStep
                key={step.id}
                step={
                  step}
                index={step.id}
                isOpen={openStep === step.id}
                onTogglestep={onToggle}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SetupGuide;
