export const Menu = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const MenuOption = ({text, id}) => (
    <div className="rotate-90 my-8  select-none transition ease-in-out  hover:text-white" onClick={() => scrollToSection(id)}>
      {text}
    </div>
  );

  return (
    <div className="bg-transparent h-screen fixed gap-5 pt-5 z-50 font-consolas flex flex-col items-center -m-3">
      <div>
        <div className="logo" onClick={() => scrollToSection("home")} />
      </div>
      <MenuOption text="Sobre mí" id="about" />
      <MenuOption text="Proyectos" id="projects" />
      <MenuOption text="Contacto" id="contact" />
    </div>
  );
};
