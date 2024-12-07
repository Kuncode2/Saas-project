import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";

const SetupStep = ({ step, index, isOpen, onTogglestep }) => {
  return (
    <div
      className={`w-full border rounded-lg p-2 sm:p-3 shadow-md ${
        isOpen ? "bg-gray-200" : ""
      }`}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => onTogglestep(index)}
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="h-[20px] w-[20px] rounded-full border-[1.25px] border-black flex items-center justify-center">
            <span className="h-6 w-6 flex items-center justify-center">
              {step.completed && <CheckIcon fontSize="small" />}
            </span>
          </div>
          <span className="text-[12px] sm:text-[14px] font-medium">{step.title}</span>
        </div>
        <KeyboardArrowUpIcon
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="mt-3 text-sm text-gray-600 border-t pt-3">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-3 sm:gap-0">
            <p className="text-[12px] sm:text-sm sm:max-w-[80%]">
              You can quickly set up your survey by activating one of the
              templates. You can choose from a list of categories or create your
              own customized survey from scratch.
            </p>
            {step.link && (
              <img
                src={step.link}
                alt="step illustration"
                className="w-[80px] sm:w-[100px] h-[56px] sm:h-[70px]"
              />
            )}
          </div>
          <button className="w-full sm:w-auto mt-3 shadow-md bg-[#c5f82a] text-black px-4 py-2 rounded-md font-medium flex flex-col hover:bg-[#b3e626]">
            Create survey
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupStep;
