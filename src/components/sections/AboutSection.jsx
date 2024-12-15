import { useTranslation } from "react-i18next";
import { BaseSection } from "../layout/BaseSection";
import { useEffect } from "react";

export const AboutSection = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const target = document.querySelector('#animatedDiv');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          target.classList.remove('opacity-0', 'translate-y-10');
          target.classList.add('opacity-100', 'translate-y-0');
        } else {
          target.classList.remove('opacity-100', 'translate-y-0');
          target.classList.add('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.2 } 
    );

    if (target) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <BaseSection id="about">
      <div
        className="text-white lg:w-[1000px] flex flex-col lg:flex-row gap-1 opacity-0  transition-all duration-500"
        id="animatedDiv"
      >
        <div className="lg:w-1/2 p-10 flex flex-col gap-10">
          <div className="text-5xl tracking-widest pepe font-bold">{t('aboutTitle')}</div>
          <div className="text-2xl pepe ">
            <p>{t('aboutText')}</p>
          </div>
        </div>
        <div className="w-1/2 h-96  bg-contain bg-no-repeat bg-center m-auto bg-[url('/src/resources/profile2.png')]"></div>
      </div>
    </BaseSection>
  );
};
