import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';
import parkRules from '../../../static/park_rules/Campground Rules.pdf' 


const FAQS = [
  {
    title: 'What are the lot fees at Hidden Acres?',
    content: () => (
      <>
        Lot fees start at $50 a night for daily visitors. More information about rates can be found in our <ExternalLink href="https://app.fireflyreservations.com/reserve?propertyGUID=b28521e1-060f-4b0b-a205-821d4aa3f37f"> Reservation Portal</ExternalLink>.
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
          More information can be found in our campground rules: <a href={parkRules}>campground rules</a>.
      </>
    ),
  },
  {
    title: 'Is Hidden Acres pet friendly?',
    content: () => (
      <>
        Yes we are! We allow for cats, dogs under 30 pounds, and all service animals. You can find more information in our campground rules here: <a href={parkRules}>campground rules</a>.
      </>
    ),
  },
  {
    title: 'What rules does Hidden Acres have?',
    content: () => (
      <>
        You can find our campground rules here: <a href={parkRules}>campground rules</a>.
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
