import StyleAttribute from "./StyleAttribute";
import Selectors from "./Selectors";
import Colors from "./Colors";
import BoxModel from "./BoxModel";
import Positions from "./Positions";
import GridLayout from "./GridLayout";
import ReactIconsSampler from "./ReactIconsSampler";
import GridSystem from "./GridSystem";
import ScreenSizeLabel from "./ScreenSizeLabel";
import Tables from "./Tables";
import StylingLists from "./StylingLists";
import StylingForms from "./StylingForms";
import Tabs from "./Tabs";
import Cards from "./Cards";
import "./index.css";

export default function Lab2() {
    return (
      <div id="wd-lab2" className="container">

        <h2>Lab 2 - Cascading Style Sheets</h2>

        <StyleAttribute />
        <Selectors />
        <Colors />
        <BoxModel />
        <Positions />
        <GridLayout />
        <ReactIconsSampler />
        <GridSystem />
        <ScreenSizeLabel />
        <Tables />
        <StylingLists />
        <StylingForms />
        <Tabs />
        <Cards />

      </div>
    );
}
  