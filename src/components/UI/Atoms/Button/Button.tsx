import { Button as AntButton } from "antd";

function Button() {
  return (
    <AntButton
      className="rounded-lg text-center	mt-10"
      type="primary"
      size="middle"
      block={true}
    >
      Add Transaction
    </AntButton>
  );
}

export default Button;
