import { Button as AntButton } from "antd";
import { MouseEventHandler } from "react";

interface ButtonProps {
  Click: MouseEventHandler<HTMLElement>;
}

function Button({ Click }: ButtonProps) {
  return (
    <AntButton
      id="atnBTN"
      className="rounded-lg text-center mt-10"
      type="primary"
      size="middle"
      block={true}
      onClick={Click}
    >
      Add Transaction
    </AntButton>
  );
}

export default Button;
