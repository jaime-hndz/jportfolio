import { useEffect } from "react";
import BentoModal from "../components/bento/BentoModal";
import { BentoGoBack } from "../components/Bento/BentoGoBack";
import { Row } from "../components/Bento/Row";
import { Column } from "../components/Bento/Column";
import { RowCol } from "../components/bento/RowCol";

export const ProjectsScreen = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="bg-gray-900 transtion ease-in-out h-screen">
      <div className="flex items-center justify-center">
        <div className="container">
          <Column className="left">
            <Row className="row1">
              <BentoGoBack />
              <BentoModal id={"bifrost"} />
            </Row>
            <Row className={`row3`}>
              <BentoModal id={"sinewave"} />
            </Row>
            <Row className="row3">
              <RowCol className={`left`} color={"blue"}>
              <div className={'p-10 relative text-5xl text-black tracking-wide text-2xl font-bold pepe'}>
          Handdo .Invoice

        </div>
              </RowCol>
              <RowCol className={`right`} color={"rose"} >
              <div className={'p-10 relative text-5xl text-black text-2xl pepe'}>
          Trabajo final de carrera

        </div>
              </RowCol>
            </Row>
          </Column>
          <Column className="right">
            <Row className={`row3`}>
              <BentoModal id={"barna"} />
            </Row>
            <Row className={`row3`}>
              <RowCol color={"orange"} >
              <div className={'p-10 relative text-5xl text-black tracking-wide text-2xl font-consolas'}>
          Jportfolio

        </div>
              </RowCol>
            </Row>
          </Column>
        </div>
      </div>
    </div>
  );
};
