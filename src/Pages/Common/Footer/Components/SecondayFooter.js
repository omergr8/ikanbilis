import classes from "../Footer.module.css";
import { Link, HStack, Stack, Divider } from "@chakra-ui/react";
import facebook from "../../../../Assets/fb.svg";
import insta from "../../../../Assets/insta.svg";
import twitter from "../../../../Assets/twitter.svg";
import linkedin from "../../../../Assets/linkedin.svg";
import logo from "../../../../Assets/logoFooter.svg";
const SecondayFooter = () => {
  return (
    <div className={classes.secondaryFooter}>
      <div className={classes.container}>
        <div className={classes.flexBox1}>
          <div className={classes.links}>
            <HStack spacing={{ base: "15px", lg: "30px" }}>
              <Link>Home</Link>
              <Link>Services</Link>
              <Link>Trading resources</Link>
              <Link>About</Link>
              <Link>Contact</Link>
            </HStack>
          </div>
          <div className={classes.icons}>
            <HStack spacing="18px">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={linkedin} alt="linkedin" />
              <img src={insta} alt="insta" />
            </HStack>
          </div>
        </div>
        <Divider orientation="horizontal" />
        <div className={classes.flexBox2}>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={classes.secondaryLinks}>
            <Stack spacing={1}>
              <h2>About us</h2>
              <Link>About</Link>
              <Link>Refer a trader</Link>
              <Link>Write a guest post</Link>
              <Link>Contact</Link>
            </Stack>
          </div>
          <div className={classes.secondaryLinks}>
            <Stack spacing={1}>
              <h2>Quick links</h2>
              <Link>Trading career</Link>
              <Link>Growth trading program</Link>
              <Link>Forex pivot points</Link>
              <Link>Major currencies of Forex</Link>
            </Stack>
          </div>
          <div className={classes.secondaryLinks3}>
            <Stack spacing={1}>
              <h2>Support</h2>
              <Link>Help</Link>
              <Link>Terms and condition</Link>
              <Link>Cookies policy</Link>
              <Link>Privacy policy</Link>
            </Stack>
          </div>
          {/* <div className={classes.icon}></div>
          <div className={classes.icon}></div> */}
        </div>
        <div className={classes.iconsMobile}>
          <HStack spacing="18px">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
            <img src={insta} alt="insta" />
          </HStack>
        </div>
      </div>
      <div className={classes.copyRight}>
        <p>© Ikanbilis.com- All Rights Reserved</p>
      </div>
    </div>
  );
};
export default SecondayFooter;
