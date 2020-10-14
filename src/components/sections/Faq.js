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
        RV pads start at 30' L x 16' W, and our largest pads are 45' L x 16' W. Each unit also includes a 24' L x 20' W parking spot for two vehicles.
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
