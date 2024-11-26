import { BaseSection } from "../layout/BaseSection";
import { DecoderText } from '../decoder-text/decoder-text';
import MouseScroll from "../mouse-scroll/MouseScroll";
import { TypingEffect } from "../TypingEffect";



export const HomeSection = () => {
  return (
    <BaseSection id='home'>
      <div className="tracking-widest text-2xl">
       <DecoderText text='JAIME HERNÁNDEZ' delay={500} />
      </div>
      <TypingEffect />
      <MouseScroll />
    </BaseSection>
  );
};
