import React, { useState } from "react";
import { Carousel, Modal } from "antd";
import { RowCol } from "./RowCol";
import { Tags } from "./CustomTags";
import { projectsObject } from "../../helpers/ProjectsObject";
import { DecoderText } from "../decoder-text/decoder-text";

const BentoModal = ({ id }) => {
  const carouselRef = React.createRef();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <RowCol
        num={projectsObject[id].numberColumn}
        className={`image ${id}-preview p-10 relative`}
        color={projectsObject[id].primaryColor}
        onClick={showModal}
      >
        <div className={projectsObject[id].textStyle}>
          <DecoderText text={projectsObject[id].title} delay={500} />
          
        </div>
        <Tags tags={projectsObject[id].tags} />
      </RowCol>
      <Modal
        className="text-white"
        footer={null}
        cancelButtonProps={false}
        title={
          <div className="text-2xl font-bold tracking-widest">
            {projectsObject[id].title}
          </div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="text-white  flex">
          <div className=" p-10 flex flex-col gap-10">
            {projectsObject[id].text}
          </div>
          <Carousel className="w-96 h-96" ref={carouselRef}>
            {projectsObject[id].images.map((i) => (
              <div
                key={i}
                onClick={() => {
                  carouselRef.current.next();
                }}
              >
                <div
                  className={`w-96 h-96 bg-contain bg-no-repeat bg-center m-auto ${i}`}
                ></div>
              </div>
            ))}
          </Carousel>
        </div>
      </Modal>
    </>
  );
};
export default BentoModal;
