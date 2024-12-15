import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const text = t("crafted")

  return (
    <div>
      <div className="w-full bg-gradient-to-t from-slate-950 to-slate-900 from-10% via-30% to-90% h-32 items-center text-white font-consolas flex items-center justify-center absolute gap-2">
        <p>© 2024 Jaime Hernandez.</p>
        <a
          href="humans.txt"
          className="underline cursor-none hover:text-sky-500 transition-all"
        >
          {text}
        </a>
      </div>
    </div>
  );
};
