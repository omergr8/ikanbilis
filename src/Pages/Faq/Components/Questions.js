import React, { useState } from "react";
import classes from "../Faq.module.css";
import plus from "../../../Assets/plus.svg";
import minus from "../../../Assets/minus.svg";
import faqImage from "../../../Assets/faq.svg";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
const faqs = [
  {
    id: 1,
    Question: "DAILY LIVE TRADING ROOM",
    Answer:
      "Prosper is a premium resell group based in discord. We are dedicated to providing our members with the tools and resources they need to succeed and overcome other resellers.",
  },
  {
    id: 2,
    Question: "TRADING PERFORMANCE STATISTICS",
    Answer:
      "Prosper is a premium resell group based in discord. We are dedicated to providing our members with the tools and resources they need to succeed and overcome other resellers.",
  },
  {
    id: 3,
    Question: "FREE WEBINARS",
    Answer:
      "Prosper is a premium resell group based in discord. We are dedicated to providing our members with the tools and resources they need to succeed and overcome other resellers.",
  },
  {
    id: 4,
    Question: "REAL-TIME TRADING NOTIFICATIONS",
    Answer:
      "Prosper is a premium resell group based in discord. We are dedicated to providing our members with the tools and resources they need to succeed and overcome other resellers.",
  },
];
const Questions = () => {
  const handleChange = (value) => {
    console.log(value.target);
  };
  return (
    <div>
      <div>
        <Accordion className={classes.accord} defaultIndex={[0]} allowMultiple>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              {({ isExpanded }) => (
                <>
                  <div className={classes.questionFlex}>
                    <div className={classes.icon}>
                      {isExpanded ? (
                        <AccordionButton className={classes.accordButton}>
                          <img
                            src={minus}
                            onClick={(isExpanded) => handleChange(isExpanded)}
                            alt="collapseIcon"
                          />
                        </AccordionButton>
                      ) : (
                        <AccordionButton className={classes.accordButton}>
                          <img
                            src={plus}
                            onClick={(isExpanded) => handleChange(isExpanded)}
                            alt="collapseIcon"
                          />
                        </AccordionButton>
                      )}
                    </div>

                    <h2 className={classes.question}>
                      <AccordionButton className={classes.button}>
                        <div flex="1">{faq.Question}</div>
                        {/* <AccordionIcon /> */}
                      </AccordionButton>
                    </h2>
                  </div>

                  <AccordionPanel className={classes.answer} pb={4}>
                    {faq.Answer}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
export default Questions;
