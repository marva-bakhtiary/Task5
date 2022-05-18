import { Card as AntCard } from "antd";
import Input from "../../Atoms/Input/Input";
import DisplayBalance from "../../Molecules/DisplayeBalance/DisplayBalance";
import DisplayTags from "../../Molecules/DisplayTagsbalance/DisplayTags";
import Modal from "../Modal/Modal";

function Card() {
  return (
    <>
      <h2 className="ml-20 mt-24 text-3xl">Total Balance</h2>
      <AntCard
        data-testid="CardID"
        className="w-4/12 h-80 rounded-lg ml-20"
        hoverable={true}
      >
        <DisplayTags />
        <Input />
       <DisplayBalance value="1,500,000"/>
        <Modal />
      </AntCard>
    </>
  );
}

export default Card;
