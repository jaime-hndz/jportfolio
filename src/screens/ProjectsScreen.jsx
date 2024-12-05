import { useEffect } from "react";
import BentoModal from "../components/bento/BentoModal";
import { BentoGoBack } from "../components/Bento/BentoGoBack";
import { Row } from "../components/Bento/Row";
import { Column } from "../components/Bento/Column";
import { RowCol } from "../components/Bento/RowCol";
import { Tags } from "../components/Bento/CustomTags";

export const ProjectsScreen = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="bg-gray-900 transtion ease-in-out h-screen">
      <div className="flex items-center justify-center">
        <div className="container">
          <Column className="left">
            <Row className="row1">
              <BentoGoBack />
              <BentoModal
                title={"Neo-bifrost"}
                text={
                  <>
                    <p>
                      El sistema utiliza una API para gestionar la autenticación
                      mediante JWT (JSON Web Tokens) firmados con llaves
                      criptográficas asincrónicas. Los usuarios inician sesión a
                      través de un frontend, donde las credenciales son
                      validadas por la API utilizando un repositorio que
                      gestiona los datos de usuarios y estaciones. Si las
                      credenciales son correctas, se genera un JWT firmado con
                      una llave privada que contiene información del usuario,
                      permisos y un tiempo de expiración.
                    </p>
                    <p>
                      Las aplicaciones que consumen la API, como
                      Sinewave-drawer, verifican los JWT usando la llave
                      pública, asegurando que los tokens sean genuinos y no
                      hayan expirado. Los tokens vencen después de un tiempo
                      establecido y, para obtener uno nuevo, el usuario debe
                      usar un token de actualización o autenticarse nuevamente.
                      El sistema sigue el patrón repositorio para separar la
                      lógica de datos y negocio, lo que facilita su
                      mantenimiento y escalabilidad.
                    </p>
                  </>
                }
                images={["neo-bifrost2.gif", "neo-bifrost1.png"]}
                component={
                  <RowCol
                    num={2}
                    className={"image p-10 relative"}
                    color="gray"
                  >
                    <div className="text-6xl text-slate-700 tracking-widest text-2xl pepe ">
                      Neo-bifrost
                    </div>
                    <Tags tags={["csharp", "react", "jwt"]} />
                  </RowCol>
                }
              />
            </Row>
            <Row className={`row3`}>
              <RowCol className={`left`} color={"amber"} />
            </Row>
            <Row className="row3">
              <RowCol className={`left`} color={"rose"} />
              <RowCol className={`right`} color={"red"} />
            </Row>
          </Column>
          <Column className="right">
            <Row className={`row3`}>
              <RowCol color={"sky"} />
            </Row>
            <Row className={`row3`}>
              <RowCol color={"orange"} />
            </Row>
          </Column>
        </div>
      </div>
    </div>
  );
};
