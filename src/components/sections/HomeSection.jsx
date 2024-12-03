import { BaseSection } from "../layout/BaseSection";
import { DecoderText } from "../decoder-text/decoder-text";
import MouseScroll from "../mouse-scroll/MouseScroll";
import { TypingEffect } from "../TypingEffect";

export const HomeSection = () => {
  return (
    <BaseSection id="home">
      <div className="text-neutral-200">
        <div className="tracking-widest text-2xl">
          <DecoderText text="JAIME HERNÁNDEZ" delay={1000} />
        </div>
        <TypingEffect />
        <MouseScroll />
      </div>
    </BaseSection>
  );
};
