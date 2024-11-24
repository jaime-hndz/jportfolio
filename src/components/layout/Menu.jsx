export const Menu = () => {
  return (
    <div
      className="bg-transparent h-screen fixed flex gap-5 pt-5"
      style={{ textOrientation: "mixed", writingMode: "vertical-rl" }}
    >
      <div>
        <a href="#home">Inicio</a>
      </div>
      <div>
        <a href="#projects">Proyectos</a>
      </div>
      <div>
        <a href="#about">Sobre mí</a>
      </div>
      <div>
        <a href="#contact">Contacto</a>
      </div>
    </div>
  );
};
