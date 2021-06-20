import classes from "./Navbar.module.css";
import React, { useState } from "react";
import {
  Container,
  Grid,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  GridItem,
  Button,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import ReactFlagsSelect from "react-flags-select";
import flag from "../../../Assets/flag.png";
import hamIcon from "../../../Assets/hamIcon.svg";
import heroImage from "../../../Assets/hero2.png";
import logo from "../../../Assets/logo3.svg";
import logo2 from "../../../Assets/logo2.png";
// Note: This code could be better,
// so I'd recommend you to understand how I solved and you could write yours better :)
// Good luck! 🍀
const Navbar = (props) => {
  const [selected, setSelected] = useState("US");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const mobileResponsive = (
    <div className={classes.mobileNavDiv}>
      <div ref={btnRef} className={classes.itemIcon} onClick={onOpen}>
        <img src={hamIcon} alt="icon" />
      </div>
      <div className={classes.itemImg}>
        {" "}
        <img className={classes.logoImg} src={logo} alt="logo" />
      </div>
      <div className={classes.item}>
        <ReactFlagsSelect
          className={classes.countrySelect}
          showSelectedLabel={false}
          showSecondarySelectedLabel={false}
          showOptionLabel={false}
          selected={selected}
          countries={["US"]}
          onSelect={(code) => setSelected(code)}
        />
      </div>
    </div>
  );
  const mobileDrawer = (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent className={classes.drawerr}>
        <DrawerCloseButton color="white" />
        <DrawerHeader>
          {" "}
          <img className={classes.logoImg} src={logo2} alt="logo" />
        </DrawerHeader>

        <DrawerBody>
          <div className={classes.drawerBody}>
            <Link>Home</Link>
            <Link>Services</Link>
            <Link>Trading resources</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
  return (
    <div>
      <div className={classes.flex}>
        <Container maxW="container.xl">
          <Grid templateColumns="repeat(23, 1fr)" gap={1}>
            <GridItem colSpan={7}>
              <img src={logo} alt="logo" />
            </GridItem>
            <GridItem className={classes.gridLink} colSpan={2}>
              <Link>Home</Link>
            </GridItem>
            <GridItem className={classes.gridLink} colSpan={2}>
              <Link>Services</Link>
            </GridItem>
            <GridItem className={classes.gridLink} colSpan={3}>
              <Link>Trading resources</Link>
            </GridItem>
            <GridItem className={classes.gridLink} colSpan={2}>
              <Link>About</Link>
            </GridItem>
            <GridItem className={classes.gridLink} colSpan={2}>
              <Link>Contact</Link>
            </GridItem>

            <GridItem colSpan={3}>
              {" "}
              <Button
                className={classes.scheduleButton}
                colorScheme="teal"
                variant="solid"
              >
                Sign In
              </Button>
            </GridItem>
            <GridItem colSpan={2}>
              <ReactFlagsSelect
                className={classes.countrySelect}
                selectedSize={22}
                showSelectedLabel={false}
                showSecondarySelectedLabel={false}
                showOptionLabel={false}
                selected={selected}
                countries={["US"]}
                onSelect={(code) => setSelected(code)}
              />
            </GridItem>
          </Grid>
        </Container>
      </div>

      {mobileResponsive}
      {mobileDrawer}
    </div>
  );
};

export default Navbar;
