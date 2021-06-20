import classes from "./SimpleProcess.module.css";
import sp1 from "../../Assets/sp1.svg";
import sp2 from "../../Assets/sp2.svg";
import sp3 from "../../Assets/sp3.svg";
import simpleProcessBack from "../../Assets/simpleProcess.svg";
import logo from "../../Assets/logo3.svg";
const SimpleProcess = () => {
  return (
    <>
      <div className={classes.simpleProcess}>
        <div className={classes.heading}>
          <h1>Simple process</h1>
        </div>
        <div className={classes.bar}>
          <div className={classes.blueBar}></div>
          <div className={classes.greenBar}></div>
        </div>
        <div className={classes.cards}>
          <div className={classes.card}>
            <img src={sp1} alt="sp1" />
            <h2>Join us</h2>
          </div>
          <div className={classes.card}>
            {" "}
            <img src={sp2} alt="sp2" />
            <h2>Trade</h2>
          </div>
          <div className={classes.card}>
            {" "}
            <img src={sp3} alt="sp3" />
            <h2>Earn & Grow</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default SimpleProcess;
