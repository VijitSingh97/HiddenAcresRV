import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';
import parkRules from '../../../static/park_rules/park_rules.pdf' 


const FAQS = [
  {
    title: 'What are the lot fees at Hidden Acres?',
    content: () => (
      <>
        Lot fees start at $35 a night for daily visitors. More information about rates can be found in our <ExternalLink href="https://app.fireflyreservations.com/reserve?propertyGUID=b28521e1-060f-4b0b-a205-821d4aa3f37f"> Reservation Portal</ExternalLink>.
      </>
    ),
  },
  {
    title: 'What are the dimension of the lots at Hidden Acres?',
    content: () => (
      <>
        Lots start at 25' x 50', and our largest lots are 30' x 65'. 
      </>
    ),
  },
  {
    title: 'Is Hidden Acres pet friendly?',
    content: () => (
      <>
        Yes we are! We allow for cats, dogs under 30 pounds, and all service animals. You can find more information in the <a href={parkRules}>park rules</a>.
      </>
    ),
  },
  {
    title: 'What rules does Hidden Acres have?',
    content: () => (
      <>
        You can find all our rules here: <a href={parkRules}>park rules</a>.
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
