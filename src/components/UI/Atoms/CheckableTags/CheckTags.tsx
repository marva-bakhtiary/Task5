import { Tag } from "antd";
import { useState } from "react";

function CheckTags() {
  const { CheckableTag } = Tag;
  const tagsData = ["None", "Month", "Day", "Category", "Type"];
  const [selectedTags, setSelectedTags] = useState(["None"]);
  const handleChange = (checked: any, tag: any) => {
    const nextSelectedTags = checked
      ? [tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };
  return (
    <>
      {tagsData.map((tag) => (
        <CheckableTag
          className="rounded-xl text-base"
          key={tag}
          checked={selectedTags.indexOf(tag) > -1}
          onChange={(checked: any) => handleChange(checked, tag)}
        >
          {tag}
        </CheckableTag>
      ))}
    </>
  );
}

export default CheckTags;
