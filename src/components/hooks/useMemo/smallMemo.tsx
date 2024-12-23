import React from "react";
import { memo } from "react";

interface SmallProps {
  value: number;
}

const SmallMemo: React.FC<SmallProps> = memo( ({value}) => {

  console.log("%cRender Small Memo", "color:cyan");

  return (
    <small style={{textAlign:"center", marginBottom:"10px"}}>{value}</small>
  );
} );

export default SmallMemo;

