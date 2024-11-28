import { Menu } from "../components/layout/Menu";
import { Menu2} from "../components/layout/Menu2";

import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { HomeSection } from "../components/sections/HomeSection";
import { PrimaryProjectsSection } from "../components/sections/PrimaryProjectsSection";

export const PortfolioScreen = () => {
  return (
    <>
      <div className="flex ">
      <Menu />
      <div className=" w-screen w-full">
        <HomeSection />
        <AboutSection />
        <PrimaryProjectsSection />
        <ContactSection />
      </div>
      <Menu2 />

      </div>
    </>
  );
};
