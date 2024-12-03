import { Link } from "react-router-dom";
import { BaseSection } from "../layout/BaseSection";

export const PrimaryProjectsSection = () => {
  return (
    <BaseSection id='projects'>
      <Link to='/projects' className="text-white pepe text-2xl italic cursor-none hover:text-sky-500 transition ease-in-out">Ir a proyectos</Link>
    </BaseSection>
  );
};
