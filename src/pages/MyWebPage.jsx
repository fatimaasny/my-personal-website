import React from "react";
import Header from "../components/Header/Header";
import PersonalInformation from "../components/PersonalInformation/PersonalInformation";
import MyServices from "../components/MyServices/MyServices";
import MySkills from "../components/MySkills/MySkills";
import PortfolioCases from "../components/PortfolioCases/PortfolioCases";

function MyWebPage() {
  return (
    <div dir="ltr" className="bg-[#f1f2ed]">
      <Header />
      <PersonalInformation />
      <MyServices />
      <MySkills />
      <PortfolioCases />
    </div>
  );
}

export default MyWebPage;
