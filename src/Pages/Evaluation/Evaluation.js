import { Grid, GridItem, Button } from "@chakra-ui/react";
import classes from "./Evaluation.module.css";
import MobileTable from "./Components/MobileTable.js";
import DesktopTable from "./Components/DesktopTable";
import multiDotLeft from "../../Assets/multiDotLeft.svg";
import multiDotRight from "../../Assets/multiDotRight.svg";
import rowDots from "../../Assets/rowDots.svg";
const Evaluation = () => {
  return (
    <div className={classes.evalDiv}>
      <div>
        <div className={classes.heading}>
          <h1>Evaluation</h1>
        </div>
        <div className={classes.bar}>
          <div className={classes.blueBar}></div>
          <div className={classes.greenBar}></div>
        </div>
        <div className={classes.paragraph}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
      </div>
      <div className={classes.dots}>
        <img src={multiDotLeft} alt="leftdot" />
      </div>
      <div className={classes.rightDots}>
        <img src={multiDotRight} alt="leftdot" />
      </div>
      <div className={classes.desktop}>
        <DesktopTable />{" "}
      </div>
      <div className={classes.mobile}>
        <MobileTable />
      </div>
      <div className={classes.rowDots}>
        <img src={rowDots} alt="rowDots" />
      </div>
    </div>
  );
};
export default Evaluation;
