import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import React from "react";
import Tag from "../../Atoms/Tag/Tag";

function DisplayTags({ incomeTotal, expenseTotal }: any) {
  return (
    <div className="justify-end flex">
      <Tag color={"cyan"} icon={<ArrowUpOutlined />}>
        {incomeTotal}
      </Tag>
      <Tag color={"error"} icon={<ArrowDownOutlined />}>
        {expenseTotal}
      </Tag>
    </div>
  );
}

export default DisplayTags;
