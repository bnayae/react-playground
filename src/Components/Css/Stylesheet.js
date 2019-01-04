import React from "react";
import "./my.css";
import myStyle from "./my.module.css";

const heading = {
  fontSize: "20pt",
  color: "indianred"
};
function Stylesheet(props /*: IStyleProps*/) {
  let className1 = props.useStyle ? "primary" : "";
  let className2 = props.useStyle ? "" : "primary";
  return (
    <div>
      <h1 className={`${className1} font-xl`}>A</h1>
      <h1 className={className2}>B</h1>
      <h1 style={heading}>C</h1>
      <h1 className={myStyle.success}>Success</h1>
      <h1 className={myStyle.error}>Error</h1>
      <hr />
    </div>
  );
}

export default Stylesheet;
