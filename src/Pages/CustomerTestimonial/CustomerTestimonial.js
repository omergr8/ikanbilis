import classes from "./CustomerTestimonial.module.css";
import Slider from "react-slick";
import Card from "./Components/Card";
import forwardIcon from "../../Assets/forward2.svg";
import previousIcon from "../../Assets/prev2.svg";

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
      <img className={classes.slider} src={previousIcon} alt="previousIcon" />
    </div>
  );
}
function NoArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
      }}
      onClick={onClick}
    />
  );
}
const CustomerTestimonial = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          nextArrow: <NoArrow />,
          prevArrow: <NoArrow />,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          nextArrow: <NoArrow />,
          prevArrow: <NoArrow />,
        },
      },
    ],
  };
  return (
    <div>
      <div className={classes.heading}>
        <h1>What Customer Say</h1>
      </div>
      <div className={classes.bar}>
        <div className={classes.blueBar}></div>
        <div className={classes.greenBar}></div>
      </div>
      <div className={classes.paragraphh}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore
        </p>
      </div>
      <div>
        <Slider {...settings}>
          <div>
            <h3>
              <Card />
            </h3>
          </div>
          <div>
            <h3>
              <Card />
            </h3>
          </div>
          <div>
            <h3>
              <Card />
            </h3>
          </div>
          <div>
            <h3>
              <Card />
            </h3>
          </div>
          <div>
            <h3>
              <Card />
            </h3>
          </div>
          <div>
            <h3>
              <Card />
            </h3>
          </div>
          <div>
            <h3>
              <Card />
            </h3>
          </div>
          <div>
            <h3>
              <Card />
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default CustomerTestimonial;
