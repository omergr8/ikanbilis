import React, { Component } from "react";
import Slider from "react-slick";
import classes from "../Evaluation.module.css";
import { Grid, GridItem, Button } from "@chakra-ui/react";

const evaluationData = [
  {
    id: 1,
    price: "$10,000",
    target1: "Phase I - Evaluation Phase = 8%",
    target2: "Phase II - Establishment Phase = 5%",
    trading: "5day",
    dailyDrawDown: "$500",
    overallDrawnDown: "$1000",
    leverage: "1:18",
    refundableFee: "$85",
    monthlyFee: "$120",
    yearlyFee: "$1200",
  },
  {
    id: 2,
    price: "$20,000",
    target1: "Phase I - Evaluation Phase = 8%",
    target2: "Phase II - Establishment Phase = 5%",
    trading: "5day",
    dailyDrawDown: "$500",
    overallDrawnDown: "$1000",
    leverage: "1:18",
    refundableFee: "$85",
    monthlyFee: "$120",
    yearlyFee: "$1200",
  },
  {
    id: 3,
    price: "$30,000",
    target1: "Phase I - Evaluation Phase = 8%",
    target2: "Phase II - Establishment Phase = 5%",
    trading: "5day",
    dailyDrawDown: "$500",
    overallDrawnDown: "$1000",
    leverage: "1:18",
    refundableFee: "$85",
    monthlyFee: "$120",
    yearlyFee: "$1200",
  },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const MobileTable = () => {
  return (
    <div>
      <Slider {...settings}>
        {evaluationData.map((data, index) => (
          <div key={index}>
            <Grid h="100%" templateColumns="repeat(5, 1fr)" gap={0}>
              <GridItem colSpan={5}>
                <div className={classes.mobileBorder1}>
                  <h2>{data.price}</h2>
                </div>
              </GridItem>
              <GridItem colSpan={5}>
                <div className={classes.mobileBorder2}>
                  <h1>Target</h1> <p>{data.target1}</p> <p>{data.target2} </p>{" "}
                </div>
              </GridItem>
              <GridItem colSpan={5}>
                <div className={classes.mobileBorder2}>
                  <h1>Minimum trading days</h1> <p>{data.trading} </p>{" "}
                </div>
              </GridItem>
              <GridItem colSpan={5}>
                <div className={classes.mobileBorder2}>
                  <h1>Daily starting draw down</h1> <p>{data.dailyDrawDown}</p>{" "}
                </div>
              </GridItem>
              <GridItem colSpan={5}>
                <div className={classes.mobileBorder2}>
                  <h1>Overall draw down</h1> <p>{data.overallDrawnDown}</p>{" "}
                </div>
              </GridItem>
              <GridItem colSpan={5}>
                <div className={classes.mobileBorder2}>
                  <h1>Available leverage</h1> <p>{data.leverage}</p>
                </div>
              </GridItem>
              <GridItem colSpan={5}>
                <div className={classes.mobileBorder2}>
                  <h1>Refundable fee</h1> <p>{data.refundableFee}</p>
                </div>
              </GridItem>
              <GridItem colSpan={5}>
                <div className={classes.mobileBorder2}>
                  <h1>Monthly fees</h1> <p>{data.monthlyFee}</p>
                </div>
              </GridItem>
              <GridItem colSpan={5}>
                <div className={classes.mobileBorder2}>
                  <h1>Yearly fees</h1> <p>{data.yearlyFee}</p>
                </div>
              </GridItem>
              <GridItem colSpan={5}>
                <div className={classes.mobileBorder3}>
                  <Button>Select plan</Button>
                </div>
              </GridItem>
            </Grid>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default MobileTable;
