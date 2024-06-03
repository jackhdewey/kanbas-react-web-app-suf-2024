//import React from "react";
import ClassSelectors from "./ClassSelectors";
import StyleAttribute from "./StyleAttribute";
import IdSelector from "./IdSelector";
import DocumentStructureStyle from "./DocumentStructureStyle";
import ForegroundColor from "./ForegroundColor";
import Padding from "./Padding";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import RelativePosition from "./RelativePosition";
import AbsolutePosition from "./AbsolutePosition";
import FixedPosition from "./FixedPosition";
import ZIndex from "./ZIndex";
import FloatImages from "./FloatImages";
import FloatDivs from "./FloatDivs";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIconsSampler";
import "./index.css";

export default function Lab2() {
    return (
      <div id="wd-lab2" className="container">
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
        <RelativePosition />
        <AbsolutePosition />
        <FixedPosition />
        <ZIndex />
        <FloatImages />
        <FloatDivs />
      </div>
    );
}
  