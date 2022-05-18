import { Card as AntCard } from "antd";
import Input from "../../Atoms/Input/Input";
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
        <h2 className="ml-[20%] mt-1">Total</h2>
        <div className="text-center cyan text-4xl font-semibold">1,000,000</div>
        <Modal />
      </AntCard>
    </>
  );
}

export default Card;
