import { ArrowUpOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Tag from "../../Atoms/Tag/Tag";
interface EntryProps {
  date: any;
  category: any;
  note: any;
  type: any;
}
const Entryline = ({ date, note, category, type }: EntryProps) => {
  return (
    <Card
      data-testid="CardID"
      hoverable={true}
      className={`w-auto h-24 rounded-xl ml-2 mr-2 mt-2 ${
        type === "income" ? "cyan2" : "orange2"
      }`}
    >
      <div className="flex justify-between">
        <h2 className="font-bold">{date}</h2>
        <div>
          <h3 className="ml-3">{note}</h3>
          <h4 className="ml-3 mb-3">{category}</h4>
        </div>
        <div>
          {type === "income" ? (
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

export default Entryline;
