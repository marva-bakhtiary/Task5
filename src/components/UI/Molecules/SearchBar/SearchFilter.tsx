import { DatePicker, Select, Input } from "antd";
const Inputs = () => {
  const { Option } = Select;
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
    <div>
      <Select data-testid="SelectID1" placeholder="Type" className="mr-5 w-24">
        <Option value="Expense">Expense</Option>
        <Option value="Income">Income</Option>
      </Select>
      <Select data-testid="SelectID2" placeholder="Category" className="mr-5">
        {Options.map((option) => (
          <Option key={option.id} value={option.value}>
            {option.value}
          </Option>
        ))}
      </Select>
      <DatePicker
        data-testid="DateID"
        placeholder="Date"
        className=" bg-gray-100 mr-5 w-40 rounded-xl"
      />
      <Input
        placeholder="Search Notes"
        className=" bg-gray-100 rounded-xl mr-5 w-40"
      />
    </div>
  );
};

export default Inputs;
