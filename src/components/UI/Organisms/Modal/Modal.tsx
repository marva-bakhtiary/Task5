import { useState } from "react";
import { Modal as AntModal } from "antd";
import Button from "../../Atoms/Button/Button";
import Inputs from "../../Molecules/ModalInputs/Inputs";
function Modal() {
  const [isVisible, setIsVisible] = useState(false);
  const clickHandler = () => {
    setIsVisible(true);
  };
  const handleOkCancel = () => {
    setIsVisible(false);
  };

  return (
    <div data-testid="ModalID">
      <Button Click={clickHandler} />

      <AntModal
        className="modalStyles"
        okText="Add"
        cancelText="Clear Values"
        visible={isVisible}
        onOk={handleOkCancel}
        onCancel={handleOkCancel}
      >
        <h2 className="orange">Add New Transaction</h2>
        <Inputs />
      </AntModal>
    </div>
  );
}
export default Modal;
