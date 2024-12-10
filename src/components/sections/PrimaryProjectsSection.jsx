import { Link } from "react-router-dom";
import { BaseSection } from "../layout/BaseSection";
import { useTranslation } from "react-i18next";

export const PrimaryProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <BaseSection id="projects">
      <Link
        to="/projects"
        className="text-white pepe text-2xl italic cursor-none hover:text-sky-500 transition ease-in-out"
      >
        {t('goToProjects')}
      </Link>
    </BaseSection>
  );
};
