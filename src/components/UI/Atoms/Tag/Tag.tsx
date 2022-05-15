import { Tag as AntTag } from "antd";
interface TagProps {
  icon?: any;
  color?: any;
  children?: any;
  extraClassname?: any;
}
const Tag = ({ icon, color, children, extraClassname }: TagProps) => {
  return (
    <div data-testid="TagsID" className="text-right">
      <AntTag
        className={`rounded-lg w-20 h-7 text-center ${extraClassname}`}
        color={color}
        icon={icon}
      >
        {children}
      </AntTag>
    </div>
  );
};

export default Tag;
