import classes from "./Faq.module.css";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import Image from "./Components/Image";
import Questions from "./Components/Questions";
import rowDots from "../../Assets/rowDots.svg";
const Faq = () => {
  return (
    <div className={classes.faq}>
      <div className={classes.heading}>
        <h1>FAQ</h1>
        <div className={classes.bar}>
          <div className={classes.blueBar}></div>
          <div className={classes.greenBar}></div>
        </div>
        <p>Here are some answers to questions you may have.</p>
      </div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2 }}
        spacingX="20px"
        spacingY="10px"
      >
        <Image />
        <Questions />
      </SimpleGrid>
      <div className={classes.rowDots}>
        <img src={rowDots} alt="rowDots" />
      </div>
    </div>
  );
};
export default Faq;
