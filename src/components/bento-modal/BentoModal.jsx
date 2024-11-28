import { useState } from 'react';
import { Modal } from 'antd';
const BentoModal = ({ component: TriggerComponent }) => {
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
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default BentoModal;