import React from "react";

// function component are mostly stateless (no 'this' keyword)
// can use 'Hooks'

// function Greet() {
//   return <h1>Hello Bnaya</h1>
// }

// default export (can be import by any name)
// const Greet = () => <h1>Hello Bnaya (Lambda with default name)</h1>
// export default Greet;

// Named export dictate the import to use same name
export const Greet = props => {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.Name} (Lambda with specific name)</h1>
      {props.children}
    </div>
  );
};
