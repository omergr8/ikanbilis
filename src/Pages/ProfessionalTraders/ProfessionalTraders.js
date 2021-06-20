import classes from "./ProfessionalTraders.module.css";
import { Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import Image from "./Components/Image";
import Description from "./Components/Description";
import proImage from "../../Assets/professionalTrader.svg";
const ProfessionalTraders = () => {
  return (
    // <div className={classes.grid}>
    //   <div className={classes.gridItem}>
    //     <img src={proImage} alt="proImage" />
    //   </div>
    //   <div className={classes.gridItem}>
    //     <Description />
    //   </div>
    // </div>
    <div className={classes.proTraders}>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 2 }}
        spacingX="30px"
        spacingY="20px"
      >
        <Image />

        <Description />
      </SimpleGrid>
    </div>
    // <Grid templateColumns="repeat(2, 1fr)" gap={6}>
    //   <GridItem colSpan={1} h="10">
    //     <div>
    //       <img src={proImage} alt="proImage" />
    //     </div>
    //   </GridItem>

    //   <GridItem colSpan={2} h="10">
    //     <Description />
    //   </GridItem>
    // </Grid>
  );
};
export default ProfessionalTraders;
