import { useEffect } from "react";
import BentoModal from "../components/Bento/BentoModal";
import { BentoGoBack } from "../components/Bento/BentoGoBack";
import { Row } from "../components/Bento/Row";
import { Column } from "../components/Bento/Column";

export const ProjectsScreen = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="bg-gray-900 transtion ease-in-out h-full">
      <div className="flex items-center justify-center">
        <div className="container">
          <Column className="left">
            <Row className="row1">
              <BentoModal id={"bifrost"} />
              <BentoGoBack />
            </Row>
            <Row className={`row3`}>
              <BentoModal id={"sinewave"} />
            </Row>
            <Row className="row3">
              <BentoModal id={"invoice"} />
              <BentoModal id={"transporte"} />
            </Row>
          </Column>
          <Column className="right">
            <Row className={`row3`}>
              <BentoModal id={"barna"} />
            </Row>
            <Row className={`row3`}>
              <BentoModal id={"portfolio"} />
            </Row>
          </Column>
        </div>
      </div>
      <div className="flex items-center justify-center -translate-y-4">
        <div className="h-[500px] container">
          <Column className="right">
            <Row className={`row3`}>
              <BentoModal id={"hospitalCash"} />
            </Row>
          </Column>
          <Column className="left">
            <Row className="row1">
              <BentoModal id={"membretes"} className={'left'} />
              <BentoModal id={"uno"} />
            </Row>
            <Row className={`row3`}>
              <BentoModal id={"chat"} />
            </Row>
          </Column>
        </div>
      </div>
    </div>
  );
};
