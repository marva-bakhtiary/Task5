import { ArrowUpOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Tag from "../../Atoms/Tag/Tag";
interface EntryProps {
  Date: any;
  Category: any;
  Description: any;
  Type: any;
}
const NewEntry = ({ Date, Description, Category, Type }: EntryProps) => {
  return (
    <Card
      data-testid="CardID"
      hoverable={true}
      className={`w-auto h-24 rounded-xl ml-2 mr-2 mt-2 ${
        Type === "income" ? "cyan2" : "orange2"
      }`}
    >
      <div className="flex justify-between">
        <h2 className="font-bold">{Date}</h2>
        <div>
          <h3 className="ml-3">{Description}</h3>
          <h4 className="ml-3 mb-3">{Category}</h4>
        </div>
        <div>
          {Type === "income" ? (
            <Tag color={"cyan"} icon={<ArrowUpOutlined />}>
              income
            </Tag>
          ) : (
            <Tag color={"red"} icon={<ArrowUpOutlined />}>
              expense
            </Tag>
          )}
        </div>
      </div>
    </Card>
  );
};

export default NewEntry;
