import { BaseSection } from "../layout/BaseSection";
import { DecoderText } from "../decoder-text/decoder-text";
import MouseScroll from "../mouse-scroll/MouseScroll";
import { TypingEffect } from "../TypingEffect";

export const HomeSection = () => {
  return (
    <BaseSection id="home">
      <div className="text-neutral-200  py-3 px-10 relative z-20">
        <div className="tracking-widest text-2xl ">
          <DecoderText text="JAIME HERNÁNDEZ | デザイナー" delay={1000} />
        </div>
        <TypingEffect />
        <MouseScroll />
      </div>
      <div className="absolute -inset-1 rounded-md blur-md bg-black/50 z-10"></div>
    </BaseSection>
  );
};
