//import React from "react";
import ClassSelectors from "./ClassSelectors";
import StyleAttribute from "./StyleAttribute";
import IdSelector from "./idSelector";
import DocumentStructureStyle from "./DocumentStructureStyle";
import ForegroundColor from "./ForegroundColor";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import "./index.css";

export default function Lab2() {
    return (
      <div id="wd-lab2">
        <h2>Lab 2 - Cascading Style Sheets</h2>
        <StyleAttribute />
        <IdSelector />
        <ClassSelectors />
        <DocumentStructureStyle />
        <ForegroundColor />
        <Padding />
        <Margins /> 
        <Corners />
        <Dimensions />
      </div>
    );
}
  