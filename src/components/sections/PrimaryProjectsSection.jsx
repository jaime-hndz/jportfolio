import { Column } from "../Bento/Column";
import { Row } from "../Bento/Row";
import BentoModal from "../bento/BentoModal";
import { BentoGoMore } from "../Bento/BentoGoBack";

export const PrimaryProjectsSection = () => {

  return (
    <div className="bg-gradient-to-b from-slate-900/70 to-slate-900 w-full h-screen flex items-center justify-center relative" id={'projects'}>

      <div className="container px-32">
          <Column className="left">
            <Row className="row1">
              <BentoModal id={"bifrost"} />
              <BentoGoMore />
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
              <BentoModal id={'portfolio'} />
            </Row>
          </Column>
        </div>
        </div>
  );
};
