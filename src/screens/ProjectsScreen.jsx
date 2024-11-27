import { RollbackOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export const ProjectsScreen = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center ">
      <div className="container">
        <div className="col-left">

          <div className="row row1">
            <div onClick={() => navigate(-1)} className="row-col left bg-blue-500 flex items-center justify-center relative hover:-translate-y-3">
              <RollbackOutlined className="text-5xl text-white" />
            </div>
            <div className="row-col2 right bg-red-500"></div>
          </div>
          <div className="row row2 bg-amber-500"></div>
          <div className="row row3">
            <div className="row-col left bg-red-500"></div>
            <div className="row-col right bg-rose-500"></div>

          </div>

        </div>
        <div className="col-right">
          <div className="row top bg-sky-500"></div>
          <div className="row botto bg-orange-500"></div>

        </div>

      </div>
      {/* <span className='text-white' onClick={() => navigate(-1)}>Volver al inicio</span> */}
    </div>
  )
}
