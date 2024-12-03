export const Menu = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const MenuOption = ({text, id}) => (
    <div className="rotate-90 py-12  select-none transition ease-in-out  hover:text-sky-400 hover:translate-x-2" onClick={() => scrollToSection(id)}>
      {text}
    </div>
  );

  return (
    <div className=" h-screen fixed gap-7 pt-5 z-50 font-consolas text-white flex flex-col items-center -mx-3  text-2xl h-screen">
      <div>
        <div className="logo" onClick={() => scrollToSection("home")} />
      </div>
      <MenuOption text="Sobre mí" id="about" />
      <MenuOption text="Proyectos" id="projects" />
      <MenuOption text="Contacto" id="contact" />
    </div>
  );
};
