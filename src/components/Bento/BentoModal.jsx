import React, { useState } from "react";
import { Carousel, Modal } from "antd";
import { RowCol } from "./RowCol";
import { LabelTags, Tags } from "./CustomTags";
import { projectsObject } from "../../helpers/ProjectsObject";
import { DecoderText } from "../decoder-text/decoder-text";

const BentoModal = ({ id, className }) => {
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
        className={`${id}-preview p-10 relative ${className} group`}
        color={projectsObject[id].primaryColor}
        onClick={showModal}
      >
        <div className={`${projectsObject[id].textStyle} select-none`}>
          <DecoderText text={projectsObject[id].title} />
          
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
          <div className=" p-10 space-y-4 ">
            {projectsObject[id].text.map((p,i) => <p key={i}>{p}</p>)}
          </div>
          {projectsObject[id].images.length > 0 ? <Carousel className="w-96 h-96" ref={carouselRef}>
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
          </Carousel> : null}
          
        </div>
        <LabelTags tags={projectsObject[id].tags} />
      </Modal>
    </>
  );
};
export default BentoModal;
