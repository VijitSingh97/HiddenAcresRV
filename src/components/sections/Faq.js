import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import { InboundLink, OutboundLink } from "gatsby-plugin-google-analytics"
import parkRules from '../../../static/park_rules/Campground Rules.pdf' 


const FAQS = [
  {
    title: 'What are the lot fees at Hidden Acres?',
    content: () => (
      <>
        Lot fees start at $50 a night for daily visitors. More information about rates can be found in our <OutboundLink href="https://app.fireflyreservations.com/reserve?propertyGUID=8b116da5-c2e9-45e4-acc7-e64ab4e5f601"> Reservation Portal</OutboundLink>.
      </>
    ),
  },
  {
    title: 'What are the dimension of the RV pads at Hidden Acres?',
    content: () => (
      <>
        Our RV pad sizes are:
        <ul>
          <li>
            25' L x 16' W
          </li>
          <li>
            35' L x 16' W
          </li>
          <li>
            45' L x 16' W
          </li>
        </ul>
        Each lot also includes a 2 vehicle, 24' L x 20' W, parking spot in front of them. Longer RVs can utilize this additional space to increases the lot length by up to 24'.
      </>
    ),
  },
  {
    title: 'What are the RV age Restrictions? Any other restrictions?',
    content: () => (
      <>
      Our restrictions include:
      <ul>
        <li>
          RV must be 15 years old or younger
        </li>
        <li>
          No damage to the outside of the RV
        </li>
        <li>
          RV must have safe and working electrical plugs
        </li>
        <li>
          RVs must have undamaged and working water and sewage hook ups
        </li>
        <li>
          Any window ACs and window fans must be approved by management
        </li>
      </ul>
          More information can be found in our campground rules: <InboundLink href={parkRules}>campground rules</InboundLink>.
      </>
    ),
  },
  {
    title: 'Is Hidden Acres pet friendly?',
    content: () => (
      <>
        Yes we are! We allow for cats, dogs under 30 pounds, and all service animals. You can find more information in our campground rules here: <OutboundLink href={parkRules}>campground rules</OutboundLink>.
      </>
    ),
  },
  {
    title: 'What rules does Hidden Acres have?',
    content: () => (
      <>
        You can find our campground rules here: <InboundLink href={parkRules}>campground rules</InboundLink>.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq" accent='secondary'>
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
