import { Link } from "react-router-dom";
import { BaseSection } from "../layout/BaseSection";

export const PrimaryProjectsSection = () => {
  return (
    <BaseSection id='projects'>
      <Link to='/projects' className="text-white italic">Ir a proyectos</Link>
    </BaseSection>
  );
};
