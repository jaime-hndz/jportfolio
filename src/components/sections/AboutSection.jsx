import { BaseSection } from "../layout/BaseSection";

export const AboutSection = () => {
  return (
    <BaseSection id="about">
      <div className="text-white w-[1000px] h-[600px] flex">
        <div className="w-1/2 p-10 flex flex-col gap-10">
          <div className="text-2xl font-bold tracking-widest">Acerca de mí</div>

          <div>
            My name is Jaime Hernández, I am a software developer 👨🏽‍💻 graduated
            from Instituto Tecnológico de Las Américas (Dominican Republic).
          </div>
          <div>
            I know the basics of C++, C#, JavaScript, Php, Python, among others.
            However, I have a lot to learn.
          </div>
          <div>
            I am currently working as a fullstack developer with React ⚛️ and
            C#. My goal for now is to learn the MERN stack 🚀
          </div>
          <div>I am also interested in learning about machine learning🤖.</div>
        </div>
        <div className=" animate-bounce w-96 h-96 bg-contain bg-no-repeat bg-center m-auto bg-[url('/src/resources/mage.svg')]"></div>
      </div>
    </BaseSection>
  );
};
