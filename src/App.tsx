import { Card, Input, Tag } from "antd";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  EditOutlined,
} from "@ant-design/icons";

function App() {
  return (
    <>
      <h2 className="ml-20 mt-24 text-3xl">Total Balance</h2>
      <Card className="w-4/12 h-80 rounded-lg ml-20" hoverable={true}>
        <div className="text-right">
          <Tag className="rounded" color="green" icon={<ArrowUpOutlined />}>
            income
          </Tag>
          <Tag className="rounded" color="pink" icon={<ArrowDownOutlined />}>
            expense
          </Tag>
        </div>
        <h4 className="ml-[20%] mt-4">Initial</h4>
        <Input
          className="rounded-lg w-56 ml-[30%]"
          size="middle"
          suffix={<EditOutlined />}
          type="number"
          placeholder="enter your initial value"
        />
        <h2 className="ml-[20%] mt-1">Total</h2>
        <div className="text-center pink text-4xl font-semibold">1,000,000</div>
      </Card>
    </>
  );
}
export default App;
