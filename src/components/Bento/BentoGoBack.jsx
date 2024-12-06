import { RollbackOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { RowCol } from "./RowCol";

export const BentoGoBack = () => {
  const navigate = useNavigate();
  return (
    <RowCol
      onClick={() => navigate(-1)}
      className={`left flex items-center justify-center relative`}
      color="red"
    >
      <RollbackOutlined className={"text-5xl text-white"} />
    </RowCol>
  );
};
