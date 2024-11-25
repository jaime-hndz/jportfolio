import { BaseSection } from "../layout/BaseSection";
import { DecoderText } from '../decoder-text/decoder-text';
import MouseScroll from "../mouse-scroll/MouseScroll";

export const HomeSection = () => {
  return (
    <BaseSection bgcolor={"orange"} id='home'>
      <div className="tracking-widest text-xl">
       <DecoderText text='JAIME HERNÁNDEZ' delay={500} />
      </div>
      <MouseScroll />
    </BaseSection>
  );
};
