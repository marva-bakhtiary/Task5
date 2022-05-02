import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Tag as AntTag } from "antd";
const Tag = () => {
  return (
    <div data-testid="TagsID" className="text-right">
      <AntTag className="rounded" color="cyan" icon={<ArrowUpOutlined />}>
        income
      </AntTag>
      <AntTag className="rounded" color="error" icon={<ArrowDownOutlined />}>
        expense
      </AntTag>
    </div>
  );
};

export default Tag;
