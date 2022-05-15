import { Card } from "antd";
import React from "react";
import NewEntry from "../../Molecules/NewEntry/NewEntry";
import SearchFilter from "../../Molecules/SearchBar/SearchFilter";
function EntryLines() {
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
      <NewEntry />
      <NewEntry />
    </Card>
  );
}

export default EntryLines;
