import { LinkedinFilled, GithubFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const Menu2 = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {

    var lang = localStorage.getItem("language") || "en" 
    if (lang === "en") {
      lang = "es"
    }else{
      lang = "en"

    }
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  return (
    <div className=" h-screen fixed right-0 pt-1 z-50 font-consolas text-white flex flex-col items-center text-2xl">
      <Link
        className="p-4 text-4xl transition ease-in-out  hover:text-sky-400 hover:-translate-x-2 cursor-none"
        target="_blank"
        to="https://www.linkedin.com/in/jaime-rafael-hernandez-746a14203 "
      >
        {" "}
        <LinkedinFilled />{" "}
      </Link>
      <Link
        className="p-4 text-4xl transition ease-in-out  hover:text-sky-400 hover:-translate-x-2 cursor-none"
        target="_blank"
        to="https://github.com/jaime-hndz"
      >
        {" "}
        <GithubFilled />{" "}
      </Link>
      <button className="p-4 text-2xl transition ease-in-out  hover:text-sky-400 hover:-translate-x-2 cursor-none bodoni font-black" onClick={() => changeLanguage("en")}>{t('language')}</button>
    </div>
  );
};
