import { useNavigate } from "react-router-dom";
import { RowCol } from "./RowCol";
import { useTranslation } from "react-i18next";

export const BentoGoBack = () => {
  const navigate = useNavigate();
  return (
    <RowCol
      onClick={() => navigate(-1)}
      className={`left flex items-center justify-center relative  text-white flex-col gap-1`}
      color="red"
    >
      <div className={"text-5xl"} >出口</div>
      <div className={"text-5xl"}>←</div>
    </RowCol>
  );
};

export const BentoGoMore = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <RowCol
      onClick={() => navigate('/projects')}
      className={`left flex items-center justify-center relative text-white flex-col gap-4`}
      color="teal"
    >
      <div className="text-5xl ">続 </div>
      <div className="text-xl ">({t('goToProjects')})</div>
    </RowCol>
  );
};
