/* eslint-disable arrow-body-style */
import React from "react";
import { Icon } from "@iconify/react";
import MainLayout from "@/components/layout/MainLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/shared/Accordion";
import {
  APP_STORE_LISTING_URL,
  BUY_ME_A_COFFEE_URL,
  GITHUB_URL,
  PLAY_STORE_LISTING_URL,
  REALM_ENCRYPTION_URL,
  SUPPORT_EMAIL
} from "@/config/general";
import { replaceUrlsAndEmailsWithAnchors } from "@/utils/utils";
import { FAQ_DATA } from "@/config/data";

const AccordionSection = ({ heading, contents, className }) => {
  return (
    <div className={className}>
      <h2 className="text-display-xs font-bold">{heading}</h2>
      {contents.map((oneFaq, index) => (
        <AccordionItem
          id={oneFaq.id}
          key={index}
          value={`item-${oneFaq.id}-${index}`}
          style={{ scrollMarginTop: "80px" }}
        >
          <AccordionTrigger className="text-left">
            {oneFaq.qns}
          </AccordionTrigger>
          <AccordionContent>
            {replaceUrlsAndEmailsWithAnchors(oneFaq.ans, {
              [SUPPORT_EMAIL]: SUPPORT_EMAIL,
              [BUY_ME_A_COFFEE_URL]: "buy me a coffee.",
              [REALM_ENCRYPTION_URL]: "Realm",
              [PLAY_STORE_LISTING_URL]: "Google Play Store",
              [APP_STORE_LISTING_URL]: "Apple App Store",
              [GITHUB_URL]: "Kei Lok"
            })}
          </AccordionContent>
        </AccordionItem>
      ))}
    </div>
  );
};

const FAQ = () => {
  return (
    <MainLayout
      title="FAQ - Dolcent"
      className="mx-auto pb-20 pt-[80px] flex flex-col h-full w-full max-w-screen-xl px-6 sm:px-16"
    >
      <h1 className="text-display-sm font-bold">Frequently Asked Questions</h1>
      <Accordion className="w-full mt-8" type="single" collapsible>
        {FAQ_DATA.map((oneFAQSection, index) => {
          return (
            <AccordionSection
              key={index}
              heading={oneFAQSection.heading}
              contents={oneFAQSection.contents}
              className="mt-8"
            />
          );
        })}
      </Accordion>
      <div
        id="contact"
        className="flex flex-col mt-16 justify-center items-center"
      >
        <h1 className="text-display-sm text-center font-bold mt-8">
          Still have Questions?
        </h1>
        <div className="flex flex-col md:flex-row items-center mt-4">
          <div className="flex bg-primary items-center justify-center rounded-full w-10 h-10">
            <Icon
              icon="ic:baseline-email"
              style={{ fontSize: 21 }}
              color="#fff"
            />
          </div>
          <div className="ml-4">
            <p className="text-gray-500 text-center md:text-left">Email</p>
            <a
              className="flex font-bold text-primary items-center"
              href={`mailto:${SUPPORT_EMAIL}`}
            >
              {SUPPORT_EMAIL}
              <Icon
                className="ml-[2px] text-primary"
                icon="material-symbols:mail"
              />
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FAQ;
