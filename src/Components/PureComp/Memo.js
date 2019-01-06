import React from "react";

function Memo({ name }) {
  console.log(`Memo render "${name}"`); // like pure component: handle should component update with a shallow comparison of props and state
  return <h3>Memo component</h3>;
}

export default React.memo(Memo);
