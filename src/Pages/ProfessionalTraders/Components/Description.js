import classes from "../ProfessionalTraders.module.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
const Description = () => {
  return (
    <div className={classes.descriptionMain}>
      <div className={classes.desktopHeader}>
        <div className={classes.heading}>
          <h1>Earn as a </h1>
          <h1>professional trader</h1>
        </div>
        <div className={classes.bar}>
          <div className={classes.blueBar}></div>
          <div className={classes.greenBar}></div>
        </div>
      </div>
      <div className={classes.description}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </p>
      </div>
      <div className={classes.description2}>
        <p>
          {" "}
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat.
        </p>
      </div>
      <div className={classes.button}>
        <Button>Get funded now</Button>
      </div>
    </div>
  );
};
export default Description;
