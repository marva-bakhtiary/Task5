import { DatePicker, Input, InputNumber, Select } from "antd";
const Inputs = ({
  note,
  setNote,
  amount,
  setAmount,
  date,
  setDate,
  type,
  setType,
  category,
  setCategory,
}: any) => {
  const { Option } = Select;
  const { TextArea } = Input;
  const Options = [
    {
      value: "Transition",
      id: 1,
    },
    {
      value: "Study",
      id: 2,
    },
    {
      value: "Clothes",
      id: 3,
    },
    {
      value: "Salary",
      id: 4,
    },
    {
      value: "Food",
      id: 5,
    },
    {
      value: "Housing",
      id: 6,
    },
    {
      value: "Utilities",
      id: 7,
    },
    {
      value: "Investing",
      id: 8,
    },
    {
      value: "Medical",
      id: 9,
    },
    {
      value: "Insurance",
      id: 10,
    },
    {
      value: "Loan",
      id: 11,
    },
  ];

  return (
    <Input.Group compact>
      <label className="cyan font-medium">Type</label>
      <Select
        data-testid="SelectID1"
        defaultValue="Expense"
        className=" w-full mb-5 "
        value={type}
        onChange={(event) => setType(event.target.value)}
      >
        <Option value="Expense">Expense</Option>
        <Option value="Income">Income</Option>
      </Select>
      <label className="cyan font-medium">Amount</label>
      <InputNumber
        className=" w-full bg-gray-100 mb-5"
        defaultValue={0}
        value={amount}
        formatter={(value) =>
          `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
        onChange={(event) => setAmount(event.target.value)}
      />
      <label className="cyan font-medium">Note</label>
      <TextArea
        data-testid="TextareaID"
        placeholder="Note"
        rows={2}
        className="bg-gray-100"
        value={note}
        onChange={(event) => setNote(event.target.value)}
      />
      <label className="cyan font-medium mt-5">Date</label>
      <DatePicker
        data-testid="DateID"
        placeholder="Date"
        className="w-full bg-gray-100 mb-5"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <label className="cyan font-medium">Category</label>

      <Select
        data-testid="SelectID2"
        defaultValue="Category"
        className="w-full mb-5"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        {Options.map((option) => (
          <Option key={option.id} value={option.value}>
            {option.value}
          </Option>
        ))}
      </Select>
    </Input.Group>
  );
};

export default Inputs;
