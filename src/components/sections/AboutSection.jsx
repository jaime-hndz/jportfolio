import { BaseSection } from "../layout/BaseSection";

export const AboutSection = () => {
  return (
    <BaseSection id="about">
      <div className="text-white w-[1000px] h-[600px] flex">
        <div className="w-1/2 p-10 flex flex-col gap-10">
          <div className="text-4xl tracking-widest pepe">Sobre mí</div>
          <div className="text-2xl pepe">
            <p>
              Desarrollador con más de 3 años de experiencia en la creación de
              proyectos desde cero, abarcando tanto el backend como el frontend.
            </p>
            <p>
              Apasionado por enfrentar desafíos que potencien mis habilidades y
              me impulsen a superar mis propios límites.
            </p>
          </div>
        </div>
        <div className=" hover:animate-bounce w-96 h-96 bg-contain bg-no-repeat bg-center m-auto bg-[url('/src/resources/mage.svg')] -translate-y-10"></div>
      </div>
    </BaseSection>
  );
};
