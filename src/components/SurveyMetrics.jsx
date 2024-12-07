import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMetrics } from "../store/surveyMetricsSlice";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SearchIcon from "@mui/icons-material/Search";

const SurveyMetrics = () => {
  const metrics = {
    active: 1,
    completed: 3,
    abandoned: 2
  };

  return (
    <div className="rounded-lg mt-5 w-full md:w-[781px] h-auto md:h-[412px] gap-[16px]">
      <div className="w-full md:w-[317px] h-[30px] gap-[16px]">
        <div className="flex flex-wrap md:flex-nowrap gap-2">
          <div className="bg-white w-full md:w-[130px] h-[35px] rounded-[10px] p-[6px] px-[12px] py-[6px] gap-[2px] flex justify-center items-center opacity-100 border-b-2 border-b-gray-300">
            <span className="text-gray-700 mt-1 font-inter text-[12px] font-[550] leading-[16px] text-left">
              <CalendarTodayIcon fontSize="small" className="mb-1" /> Last 30
              days
            </span>
          </div>
          <div className="bg-white w-full md:w-[180px] h-[35px] rounded-[10px] p-[6px] px-[12px] py-[6px] gap-[2px] border-b-2 border-b-gray-300 flex justify-center items-center opacity-100">
            <span className="text-gray-700 font-inter text-[12px] font-[550] leading-[16px] text-left">
              Compare: Previous month
            </span>
          </div>
        </div>

        <div className="w-full md:w-[781px] h-[94px] gap-[16px] mt-5 flex flex-wrap md:flex-nowrap">
          <div className="bg-white w-full md:w-[249.67px] h-[94px] p-4 px-3 gap-4 rounded-[12px] mb-4 md:mb-0">
            <div className="w-full md:w-[225.67px] h-auto flex items-center justify-between">
              <span className="text-[15px] border-b-[1px] pb-[2px]">
                Surveys created
              </span>
              <SearchIcon />
            </div>
            <div className="w-full md:w-[225.67] h-[40px]">
              <div className="mt-2 text-[20px] font-semibold">
                {metrics.active}
              </div>
            </div>
          </div>

          <div className="bg-white w-full md:w-[249.67px] h-[94px] p-4 px-3 gap-4 rounded-[12px] mb-4 md:mb-0">
            <div className="w-full md:w-[225.67px] h-auto flex items-center justify-between">
              <span className="text-[15px] border-b-[1px] pb-[2px]">
                Surveys published
              </span>
              <SearchIcon />
            </div>
            <div className="w-full md:w-[225.67] h-[40px]">
              <div className="mt-2 text-[20px] font-semibold">
                {metrics.completed}
              </div>
            </div>
          </div>

          <div className="bg-white w-full md:w-[249.67px] h-[94px] p-4 px-3 gap-4 rounded-[12px]">
            <div className="w-full md:w-[225.67px] h-auto flex items-center justify-between">
              <span className="text-[15px] border-b-[1px] pb-[2px]">
                Response rate
              </span>
              <SearchIcon />
            </div>
            <div className="w-full md:w-[225.67] h-[40px]">
              <div className="mt-2 text-[20px] font-semibold">
                {metrics.abandoned}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[781px] h-auto md:h-[258px] gap-3 bg-white mt-[19vh] rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row w-full md:w-[781px] h-auto md:h-[44px] rounded-tl-[12px] rounded-tr-[12px] border-[1px]">
          <div className="w-full md:w-[400px] h-[44px] pt-[10px] pr-[12px] pb-[7px] pl-[12px] text-gray-700 flex items-center">
            Survey name
          </div>
          <div className="w-full md:w-[120px] h-[44px] pt-[10px] pr-[12px] pb-[7px] pl-[12px] text-gray-700 flex items-center">
            Responses
          </div>
          <div className="w-full md:w-[150px] h-[44px] pt-[10px] pr-[12px] pb-[7px] pl-[12px] text-gray-700 flex items-center">
            Completion rate
          </div>
          <div className="w-full md:w-[120px] h-[44px] pt-[10px] pr-[12px] pb-[7px] pl-[12px] text-gray-700 flex items-center">
            Survey type
          </div>
        </div>

        <div className="w-full md:w-[781px] h-[214px] rounded-b-[12px] rounded-l-[12px] border-[1px] pt-[20px] pb-[10px] flex flex-col items-center justify-center">
          <img
            src="/Asserts/Frame .png"
            alt="No surveys illustration"
            className="w-[160px] h-[125px] p-[16px] gap-[1px] mb-4"
          />
          <div className="w-full md:w-[781px] h-[62px] pb-[20px] gap-[4px] flex flex-col justify-center items-center">
            <p className="text-gray-900 font-medium text-base mb-1">
              No surveys yet!
            </p>
            <p className="text-gray-600 text-sm">
              Create your survey to get started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyMetrics;
