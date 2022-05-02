import { EditOutlined } from "@ant-design/icons";
import { InputNumber as AntInput } from "antd";

const Input = () => {
  function onChange(value: any) {
    console.log("changed", value);
  }
  return (
    <>
      <h4 className="ml-[20%] mt-4">Initial</h4>
      <AntInput
        data-testid="InputID"
        className="rounded-lg w-56 ml-[30%]"
        prefix={<EditOutlined />}
        size="middle"
        defaultValue={0}
        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
