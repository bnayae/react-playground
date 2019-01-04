import React from "react";

function ListSample() {
  const names: string[] = ["Bnaya", "John", "Ken"];
  const namesJsx: JSX.Element[] = names.map((name, index) => (
    <p key={index}>
      {index}: {name}
    </p>
  ));
  return (
    <div>
      <h3>indexed (only for static not sortable list)</h3>
      {namesJsx}
      <hr />
    </div>
  );
}

export default ListSample;
