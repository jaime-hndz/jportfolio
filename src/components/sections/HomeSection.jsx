import { BaseSection } from "../layout/BaseSection";
import { DecoderText } from '../decoder-text/decoder-text';
import MouseScroll from "../mouse-scroll/MouseScroll";

export const HomeSection = () => {
  return (
    <BaseSection id='home'>
      <div className="tracking-widest text-l">
       <DecoderText text='JAIME HERNÁNDEZ' delay={500} />
      </div>
      <div className="text-5xl font-consolas">
        <div className="w-80" >
          <h1>Desarrollador  de software</h1>
        </div>
      </div>
      <MouseScroll />
    </BaseSection>
  );
};
