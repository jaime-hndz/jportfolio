import { useTranslation } from "react-i18next";
import { BaseSection } from "../layout/BaseSection";

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <BaseSection id="about">
      <div className="text-white w-[1000px] h-[600px] flex">
        <div className="w-1/2 p-10 flex flex-col gap-10">
          <div className="text-4xl tracking-widest pepe">{t('aboutTitle')}</div>
          <div className="text-2xl pepe">
            <p>
              {t('aboutText')}
            </p>
          </div>
        </div>
        <div className=" hover:animate-bounce w-96 h-96 bg-contain bg-no-repeat bg-center m-auto bg-[url('/src/resources/mage.svg')] -translate-y-10"></div>
      </div>
    </BaseSection>
  );
};
