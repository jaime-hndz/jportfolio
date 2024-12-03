import { useEffect, useState } from "react";

export const TypingEffect = () => {
    const fullText = "Desarrollador de software";
    const [displayedText, setDisplayedText] = useState("");
    const typingSpeed = 100;
  
    useEffect(() => {
      let index = 0;
  
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
      <div className="text-7xl font-consolas">
        <div className="w-[520px]">
          <h1>
            {displayedText}
            <span className="cursor">|</span>
          </h1>
        </div>
      </div>
    );
  };