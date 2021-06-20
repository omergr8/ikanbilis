import classes from "../Footer.module.css";
import {
  Grid,
  GridItem,
  Stack,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import skype from "../../../../Assets/skype.svg";
import msn from "../../../../Assets/msn.svg";
import phone from "../../../../Assets/phone.svg";
import email from "../../../../Assets/email2.svg";
const PrimaryFooter = () => {
  return (
    <div className={classes.primaryFooter}>
      <div className={classes.container}>
        <div className={classes.primaryHeading}>
          contact us for any questions
        </div>
        <div className={classes.flexBox}>
          <div className={classes.primaryAddress}>
            <h1>Business Address</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <p>
              <span>
                <img src={skype} alt="skype" />{" "}
              </span>
              ikanbilis{" "}
            </p>
            <p>
              <span>
                <img src={msn} alt="msn" />{" "}
              </span>
              ikanbilis@hotmail.com
            </p>
            <p>
              <span>
                <img src={phone} alt="phone" />{" "}
              </span>
              +886-3-5897711
            </p>
            <p>
              <span>
                <img src={email} alt="email" />{" "}
              </span>
              sales@ikanbilis.com
            </p>
          </div>
          <div className={classes.formBackground}>
            <div className={classes.primaryForm}>
              <Stack spacing={3}>
                <label>Your first name* </label>
                <Input variant="flushed" placeholder="Your first name" />
                <label>Your last name*</label>
                <Input variant="flushed" placeholder="Your last name" />
                <label>Phone number *</label>
                <Input variant="flushed" placeholder="Phone number " />
                <label>Message</label>
                <Textarea placeholder="Message" />
                <div className={classes.stackButton}>
                  <Button variant="outline">Submit</Button>
                </div>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PrimaryFooter;
