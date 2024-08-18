import React from "react";
import Header from "../components/Header/Header";
import PersonalInformation from "../components/PersonalInformation/PersonalInformation";
import MyServices from "../components/MyServices/MyServices";
import MySkills from "../components/MySkills/MySkills";
import PortfolioCases from "../components/PortfolioCases/PortfolioCases";
import MyStory from "../components/MyStory/MyStory";
import ContactMe from "../components/ContactMe/ContactMe";
import Footer from "../components/Footer/Footer";

function MyWebPage() {
  return (
    <div dir="ltr" className="bg-[#f1f2ed]   font-Jost">
      <Header />
      <PersonalInformation />
      <MyServices />
      <MySkills />
      <PortfolioCases />
      <MyStory />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default MyWebPage;
