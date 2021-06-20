import classes from "../CustomerTestimonial.module.css";
import ReactStars from "react-rating-stars-component";
import { Grid, GridItem } from "@chakra-ui/react";
import testimonialHeader from "../../../Assets/testimonialHeader.svg";
import avatar from "../../../Assets/avatar.svg";
const Card = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className={classes.cards}>
      <div className={classes.card}>
        <div className={classes.container}>
          <Grid templateColumns="repeat(5, 1fr)" gap={2}>
            <GridItem colSpan={5} h="2">
              <div className={classes.profile}>
                <img
                  className={classes.image}
                  src={testimonialHeader}
                  alt="testimonialHeader"
                />
              </div>
            </GridItem>
            <GridItem colSpan={5}>
              <div className={classes.stars}>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>
            </GridItem>
            <GridItem colSpan={5}>
              <div className={classes.paragraph}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
                  et cras sapien tristique interdum massa viverra purus lorem.
                  Sed massa odio magna sociis.
                </p>
              </div>
            </GridItem>
            <GridItem colSpan={5}>
              <div className={classes.footerPar}>
                <p>Malino Alex</p>
                <p>Los Angeles</p>
              </div>
            </GridItem>
            <GridItem colSpan={5}>
              <div className={classes.avatar}>
                <img className={classes.avatarImg} src={avatar} alt="avatar" />
              </div>
            </GridItem>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default Card;
