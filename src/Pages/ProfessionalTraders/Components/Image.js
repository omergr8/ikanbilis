import classes from "../ProfessionalTraders.module.css";
import proImage from "../../../Assets/professionalTrader.svg";
const Image = () => {
  return (
    <div className={classes.image}>
      <div className={classes.mobileHeader}>
        <div className={classes.heading}>
          <h1>Earn as a </h1>
          <h1>professional Trader</h1>
        </div>
        <div className={classes.bar}>
          <div className={classes.blueBar}></div>
          <div className={classes.greenBar}></div>
        </div>
      </div>
      <img src={proImage} alt="proImage" />
    </div>
  );
};
export default Image;
