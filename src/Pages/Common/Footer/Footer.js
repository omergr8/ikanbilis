import classes from "./Footer.module.css";
import PrimaryFooter from "./Components/PrimaryFooter";
import SecondayFooter from "./Components/SecondayFooter";
const Footer = () => {
  return (
    <div className={classes.footer}>
      <PrimaryFooter />
      <SecondayFooter />
    </div>
  );
};
export default Footer;
