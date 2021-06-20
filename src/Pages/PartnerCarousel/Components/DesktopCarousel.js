import React, { Component } from "react";
import forwardIcon from "../../../Assets/forward.svg";
import previousIcon from "../../../Assets/previous.svg";
import icon1 from "../../../Assets/p1.svg";
import icon2 from "../../../Assets/p2.svg";
import icon3 from "../../../Assets/p3.svg";
import icon4 from "../../../Assets/p4.svg";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "40px",
      }}
      onClick={onClick}
    >
      <img src={forwardIcon} alt="forwardIcon" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        width: "40px",
        marginLeft: "-10px",
      }}
      onClick={onClick}
    >
      <img src={previousIcon} alt="previousIcon" />
    </div>
  );
}

export default class DesktopCarousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div>
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
          <div>
            <img src={icon4} alt="icon4" />
          </div>
        </Slider>
      </div>
    );
  }
}
