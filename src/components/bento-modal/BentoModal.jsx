import React, { useState } from "react";
import { Carousel, Modal } from "antd";
const BentoModal = ({ component: TriggerComponent }) => {
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
          <div className="text-2xl font-bold tracking-widest">Acerca de mí</div>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
      >
        <div className="text-white  flex">
          <div className="w-1/2 p-10 flex flex-col gap-10">
            <div>
              My name is Jaime Hernández, I am a software developer 👨🏽‍💻 graduated
              from Instituto Tecnológico de Las Américas (Dominican Republic).
            </div>
            <div>
              I know the basics of C++, C#, JavaScript, Php, Python, among
              others. However, I have a lot to learn.
            </div>
            <div>
              I am currently working as a fullstack developer with React ⚛️ and
              C#. My goal for now is to learn the MERN stack 🚀
            </div>
            <div>
              I am also interested in learning about machine learning🤖.
            </div>
          </div>
          <Carousel className="w-96 h-96" ref={carouselRef}>
            <div
              onClick={() => {
                carouselRef.current.next();
              }}
            >
              <div className="w-96 h-96 bg-contain bg-no-repeat bg-center m-auto bg-[url('/src/resources/neo-bifrost2.gif')]"></div>
            </div>
            <div
              onClick={() => {
                carouselRef.current.next();
              }}
            >
              <div className=" w-96 h-96 bg-contain bg-no-repeat bg-center m-auto bg-[url('/src/resources/neo-bifrost1.png')]"></div>
            </div>
          </Carousel>
        </div>
      </Modal>
    </>
  );
};
export default BentoModal;
