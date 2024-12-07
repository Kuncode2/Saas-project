import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SetupGuide from "../components/SetupGuide";
import SurveyMetrics from "../components/SurveyMetrics";
import Footer from "../components/Footer";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex w-full bg-background relative ">
        <div className="m-3 w-[240px] relative">
          <Sidebar />
        </div>
        <div className="min-w-[calc(1440px_-240px)] items-center justify-center  flex flex-col gap-[16px]">
          <div className="w-full  max-w-[781px]  bg-background">
            <Header />
            <SetupGuide />
            <SurveyMetrics />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
