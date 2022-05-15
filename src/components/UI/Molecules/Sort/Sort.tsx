import React from "react";
import CheckTags from "../../Atoms/CheckableTags/CheckTags";

function Sort() {
  return (
    <>
      <h1 className="ml-20 mt-12 mb-12 ">Transactions</h1>
      <div className="flex">
        <h3 className="ml-20">Group By:</h3>
        <CheckTags />
      </div>
    </>
  );
}

export default Sort;
