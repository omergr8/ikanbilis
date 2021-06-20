import { Grid, GridItem, Button } from "@chakra-ui/react";
import classes from "../Evaluation.module.css";

const DesktopTable = () => {
  return (
    <div className={classes.evalDiv}>
      <Grid
        h="500px"
        templateRows="repeat(10, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={0}
        className={classes.grid}
      >
        <GridItem colStart={2} colEnd={3}>
          <div className={classes.border4}>$10,000</div>
        </GridItem>
        <GridItem colStart={3} colEnd={4}>
          <div className={classes.border4}>$20,000</div>
        </GridItem>
        <GridItem colStart={4} colEnd={5}>
          <div className={classes.border4}>$30,000</div>
        </GridItem>
        <GridItem colStart={5} colEnd={6}>
          {" "}
          <div className={classes.border4}>$40,000</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border2_2}>Target</div>
        </GridItem>
        <GridItem colStart={2} colEnd={6}>
          <div className={classes.border}>
            Phase I - Evaluation Phase = 8% Phase II - Establishment Phase = 5%
          </div>
        </GridItem>

        <GridItem colSpan={1}>
          <div className={classes.border2}>Minimum trading days</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>5day</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>5day</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>5day</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>5day</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border2}>Daily starting draw down</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$500</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$500</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$500</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$500</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border2}>Overall draw down</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$1000</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$1000</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$1000</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$1000</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border2}>Available leverage</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>1:18</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>1:18</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>1:18</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>1:18</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border2}>Refundable fee</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$85</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$85</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$85</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$85</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border2}>Monthly fees</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$120</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$120</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$120</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$120</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border2}>Yearly fees</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$1200</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$1200</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$1200</div>
        </GridItem>
        <GridItem colSpan={1}>
          <div className={classes.border}>$1200</div>
        </GridItem>

        <GridItem colStart={2} colEnd={3}>
          <div className={classes.border3}>
            <Button>Select plan</Button>
          </div>
        </GridItem>
        <GridItem colStart={3} colEnd={4}>
          <div className={classes.border3}>
            <Button>Select plan</Button>
          </div>
        </GridItem>
        <GridItem colStart={4} colEnd={5}>
          <div className={classes.border3}>
            <Button>Select plan</Button>
          </div>
        </GridItem>
        <GridItem colStart={5} colEnd={6}>
          <div className={classes.border3}>
            <Button>Select plan</Button>
          </div>
        </GridItem>
      </Grid>
    </div>
  );
};
export default DesktopTable;
