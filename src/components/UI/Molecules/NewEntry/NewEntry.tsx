import { ArrowUpOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Tag from "../../Atoms/Tag/Tag";
const NewEntry = () => {
  return (
    <Card
      data-testid="CardID"
      hoverable={true}
      className="w-auto h-24 rounded-xl ml-2 mr-2 mt-2 cyan2"
    >
      <div className="flex justify-between">
        <h2 className="font-bold">Date</h2>
        <div>
          <h3 className="ml-3">Going Shopping 22</h3>
          <h4 className="ml-3 mb-3">Transition</h4>
        </div>
        <div>
          <Tag color={"cyan"} icon={<ArrowUpOutlined />}>
            income
          </Tag>
        </div>
      </div>
    </Card>
  );
};

export default NewEntry;
