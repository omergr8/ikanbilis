import classes from "./PartnerCarousel.module.css";
import DesktopCarousel from "./Components/DesktopCarousel";
import MobileCarousel from "./Components/MobileCarousel";
import sixDots from "../../Assets/sixDots.svg";
const PartnerCarousel = () => {
  return (
    <>
      <div className={classes.partnerCarousel}>
        <div className={classes.desktop}>
          <DesktopCarousel />
        </div>
        <div className={classes.mobile}>
          <MobileCarousel />
        </div>
        <div className={classes.sixDots}>
          <img src={sixDots} alt="sixDots" />
        </div>
      </div>
    </>
  );
};
export default PartnerCarousel;
