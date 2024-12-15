import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const TypingEffect = () => {
  const { t } = useTranslation();
  const [fullText, setFullText] = useState(undefined);
  const rawText = t("title");
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 100;

  useEffect(() => {
    if (!fullText || fullText !== rawText) {
      setFullText(t("title"));
    } else {
      let index = -1;
      setDisplayedText("");
      const typeCharacter = () => {
        if (index < fullText.length - 1) {
          setDisplayedText((prev) => prev + fullText[index]);
          index++;
          setTimeout(typeCharacter, typingSpeed);
        }
      };

      typeCharacter();

      return () => {
        index = fullText.length;
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullText, typingSpeed, rawText]);

  return (
    <div className="text-4xl md:text-7xl ">
      <div className="w-[520px]">
        <h1>
          {displayedText}
          <span className="cursor">|</span>
        </h1>
      </div>
    </div>
  );
};
