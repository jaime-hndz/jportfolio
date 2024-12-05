import React, { useState } from "react";
import { Carousel, Modal } from "antd";
const BentoModal = ({ component: TriggerComponent, images, title, text }) => {
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
      {TriggerComponent && (
        <TriggerComponent.type
          {...TriggerComponent.props}
          onClick={showModal}
        />
      )}
      <Modal
        className="text-white"
        footer={null}
        cancelButtonProps={false}
        title={
          <div className="text-2xl font-bold tracking-widest">{title}</div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="text-white  flex">
          <div className=" p-10 flex flex-col gap-10">
            {text}
          </div>
          <Carousel className="w-96 h-96" ref={carouselRef}>
            {images.map(i =>             <div
              key={i}
              onClick={() => {
                carouselRef.current.next();
              }}
            >
              <div className={`w-96 h-96 bg-contain bg-no-repeat bg-center m-auto bg-[url('/src/resources/${i}')]`}></div>
            </div>)}
          </Carousel>
        </div>
      </Modal>
    </>
  );
};
export default BentoModal;
