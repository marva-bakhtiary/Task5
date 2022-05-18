import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import React from "react";
import Tag from "../../Atoms/Tag/Tag";

function DisplayTags() {
  return (
    <div className="justify-end flex">
      <Tag color={"cyan"} icon={<ArrowUpOutlined />}>
        income
      </Tag>
      <Tag color={"error"} icon={<ArrowDownOutlined />}>
        expense
      </Tag>
    </div>
  );
}

export default DisplayTags;
