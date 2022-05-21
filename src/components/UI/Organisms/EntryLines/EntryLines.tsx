import { Card } from "antd";
import Entryline from "../../Molecules/Entryline/Entryline";
import SearchFilter from "../../Molecules/SearchBar/SearchFilter";
function EntryLines({ entries }: any) {
  return (
    <Card
      data-testid="CardID"
      className="w-auto h-auto rounded-xl ml-20 mr-16 mt-2 "
    >
      <div className="flex justify-between">
        <h2 className="ml-2 mb-6 ">None</h2>
        <div>
          <SearchFilter />
        </div>
      </div>
      {entries.map((entry: any) => (
        <Entryline key={entry.id} {...entry} />
      ))}
    </Card>
  );
}

export default EntryLines;
