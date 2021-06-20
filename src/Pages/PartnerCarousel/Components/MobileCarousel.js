import React, { Component } from "react";
import classes from "../PartnerCarousel.module.css";

import icon1 from "../../../Assets/p1.svg";
import icon2 from "../../../Assets/p2.svg";
import icon3 from "../../../Assets/p3.svg";
import icon4 from "../../../Assets/p4.svg";
import Slider from "react-slick";

export default class MobileCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
    return (
      <div className={classes.mobileDiv}>
        <Slider {...settings}>
          <div>
            <img src={icon1} alt="icon1" />
          </div>
          <div>
            <img src={icon2} alt="icon2" />
          </div>
          <div>
            <img src={icon3} alt="icon3" />
          </div>
          <div>
            <img src={icon4} alt="icon4" />
          </div>
          <div>
            <img src={icon4} alt="icon4" />
          </div>
        </Slider>
      </div>
    );
  }
}
