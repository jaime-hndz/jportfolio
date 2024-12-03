import { Button, message } from "antd";
import { BaseSection } from "../layout/BaseSection";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { CopyOutlined } from "@ant-design/icons";

export const ContactSection = () => {
  const [capVal, setCapVal] = useState(null);
  const [visible, setVisible] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText("jaime25112002@gmail.com")
      .then(() => {
        messageApi.open({
          type: "success",
          content: "Se ha copiado el texto en el portapapeles",
        });
      })
      .catch((err) => {
        messageApi.open({
          type: "error",
          content: `Error al copiar el texto${err}`,
        });
      });
  };

  return (
    <>
      {contextHolder}
      <BaseSection id="contact">
        <div className="text-3xl text-white flex flex-col items-center gap-10 font-bold">
          <div className=" tracking-widest pepe ">Contactame!!</div>
          {!visible ? (
            <>
              <ReCAPTCHA
                sitekey="6LehSIsqAAAAAPwRqferKwO3B_30Pl3FqgOVoMYW"
                onChange={(val) => setCapVal(val)}
              />{" "}
              <div>
                <Button
                  disabled={!capVal}
                  type="text"
                  onClick={() => setVisible(true)}
                  className="boton"
                >
                  Ver correo electronico
                </Button>
              </div>
            </>
          ) : null}

          {visible ? (
            <div className="flex gap-3 items-center transition ease-in-out italic">
              <h1>Jaime25112002@gmail.com</h1>
              <Button
                onClick={copyToClipboard}
                type="text"
                className="text-white text-3xl hover:text-sky-500"
              >
                <CopyOutlined />
              </Button>
            </div>
          ) : null}
        </div>
      </BaseSection>
    </>
  );
};
