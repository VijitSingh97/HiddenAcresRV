import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import { OutboundLink } from "gatsby-plugin-google-analytics"
import parkRules from '../../../static/park_rules/Campground Rules.pdf' 


const FAQS = [
  {
    title: 'Is Hidden Acres pet friendly?',
    content: () => (
      <>
        Yes we are! We allow for cats, dogs under 30 pounds, and all service animals. You can find more information in our campground rules here: <OutboundLink href={parkRules} target="_blank">campground rules</OutboundLink>.
      </>
    ),
  },
  {
    title: 'What school are nearby Hidden Acres?',
    content: () => (
      <>
        The schools around us include: <OutboundLink href="https://www.greatschools.org/texas/princeton/19504-Harper-Elementary-School/" target="_blank">Harper Elementary School</OutboundLink>, <OutboundLink href="https://www.greatschools.org/texas/princeton/5624-Clark-Jr-High-School/" target="_blank">Clark Jr High School</OutboundLink>, and <OutboundLink href="https://www.greatschools.org/texas/princeton/5623-Princeton-High-School/" target="_blank">Princeton High School</OutboundLink>. All of which are in Princeton ISD.
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
    title: 'What are the RV age restrictions at Hidden Acres? Any other restrictions?',
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
          More information can be found in our campground rules: <OutboundLink href={parkRules} target="_blank">campground rules</OutboundLink>.
      </>
    ),
  },
  {
    title: 'What rules does Hidden Acres have?',
    content: () => (
      <>
        You can find our campground rules here: <OutboundLink href={parkRules} target="_blank">campground rules</OutboundLink>.
      </>
    ),
  },
  {
    title: 'What are the lot fees at Hidden Acres?',
    content: () => (
      <>
        Lot fees start at $50 a night for daily visitors. More information about rates can be found in our <OutboundLink href="https://app.fireflyreservations.com/reserve?propertyGUID=8b116da5-c2e9-45e4-acc7-e64ab4e5f601"> Reservation Portal</OutboundLink>.
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
