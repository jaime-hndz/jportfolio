import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const TypingEffect = () => {
  const { t } = useTranslation();


    const fullText = t('title')
    const [displayedText, setDisplayedText] = useState("");
    const typingSpeed = 100;
  
    useEffect(() => {
      let index = -1;
      setDisplayedText("")
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
    }, [fullText, typingSpeed]);
  
    return (
      <div className="text-7xl ">
        <div className="w-[520px]">
          <h1>
            {displayedText}
            <span className="cursor">|</span>
          </h1>
        </div>
      </div>
    );
  };