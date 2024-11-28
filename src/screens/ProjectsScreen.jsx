import { RollbackOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BentoModal from "../components/bento-modal/BentoModal";

const effect = "hover:translate-y-1 hover:translate-x-1 border-r-8 border-b-8 hover:border-none"
export const ProjectsScreen = () => {
  const navigate = useNavigate();

  useEffect(() => window.scrollTo(0, 0), [])
  return (
    <div className={`bg-gray-900`}>
      <div className={`flex items-center justify-center `}>
        <div className={`container`}>
          <div className={`col-left`}>
            <div className={`row row1`}>
              <div
                onClick={() => navigate(-1)}
                className={`row-col left bg-blue-500 flex items-center justify-center relative ${effect} border-blue-600`}
              >
                <RollbackOutlined className={`text-5xl text-white`} />
              </div>
              <BentoModal component={<div className={`row-col2 right bg-red-500 ${effect} border-red-600`}></div>} />
              
            </div>
            <div className={`row row2 bg-amber-500 ${effect} border-amber-600`}></div>
            <div className={`row row3`}>
              <div className={`row-col left bg-red-500 ${effect} border-red-600`}></div>
              <div className={`row-col right bg-rose-500 ${effect} border-rose-600`}></div>
            </div>
          </div>
          <div className={`col-right`}>
            <div className={`row top bg-sky-500 ${effect} border-sky-600`}></div>
            <div className={`row botto bg-orange-500 ${effect} border-orange-600`}></div>
          </div>
        </div>
      </div>
      <div className={`flex items-center justify-center -translate-y-4 `}>
        <div className={`container`}>
        <div className={`col-right`}>
            <div className={`row top bg-sky-500 ${effect} border-sky-600`}></div>
            <div className={`row botto bg-orange-500 ${effect} border-orange-600`}></div>
          </div>
          <div className={`col-left`}>
            <div className={`row row1`}>
              <div
                className={`row-col left bg-blue-500 flex items-center justify-center relative ${effect} border-blue-600`}
              >
              </div>
              <div className={`row-col2 right bg-red-500 ${effect} border-red-600`}></div>
            </div>
            <div className={`row row2 bg-amber-500 ${effect} border-amber-600`}></div>
            <div className={`row row3`}>
              <div className={`row-col left bg-red-500 ${effect} border-red-600`}></div>
              <div className={`row-col right bg-rose-500 ${effect} border-rose-600`}></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
