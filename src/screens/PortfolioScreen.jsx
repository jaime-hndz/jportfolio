import { useTranslation } from "react-i18next";
import { Menu } from "../components/layout/Menu";
import { Menu2 } from "../components/layout/Menu2";

import { AboutSection } from "../components/sections/AboutSection";
import { ContactSection } from "../components/sections/ContactSection";
import { HomeSection } from "../components/sections/HomeSection";
import { PrimaryProjectsSection } from "../components/sections/PrimaryProjectsSection";

export const PortfolioScreen = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex ">
        <Menu />
        <div className=" w-screen w-full">
          <HomeSection />
          <AboutSection />
          <PrimaryProjectsSection />
          <ContactSection />
          <div className="w-full bg-gradient-to-t from-slate-950 to-slate-900 from-10% via-30% to-90% h-32 items-center text-white font-consolas flex items-center justify-center absolute gap-2">
            <p>© 2024 Jaime Hernandez.</p>
            <a href="humans.txt" className="underline cursor-none hover:text-sky-500 transition-all">{t("crafted")}</a>
          </div>
        </div>
        <Menu2 />
      </div>
    </>
  );
};
