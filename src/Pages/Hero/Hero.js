import classes from "./Hero.module.css";
import heroImage from "../../Assets/hero2.png";
import heroBack from "../../Assets/heroBack.png";
import { Button, ButtonGroup } from "@chakra-ui/react";
const Hero = () => {
  // const svgPath = `${heroImage}#svgView(preserveAspectRatio(none))`;
  return (
    <div className={classes.imgDiv}>
      <img className={classes.img2} src={heroBack} alt="hero" />
      <img className={classes.img1} src={heroImage} alt="hero" />
      <div className={classes.heroText}>
        <h1 className={classes.heroTextH1}>
          INSTANT FUNDING FOR FOREX TRADERS
        </h1>
        <div className={classes.bar}>
          <div className={classes.blueBar}></div>
          <div className={classes.greenBar}></div>
        </div>
        <div className={classes.button}>
          <Button colorScheme="blue">Get funded now</Button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
