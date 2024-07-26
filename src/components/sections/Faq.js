import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import parkRules from '../../../static/park_rules/Campground Rules.pdf' 


const FAQS = [
  {
    title: 'What is Hidden Acres\'s pet policy?',
    content: () => (
      <>
        Most pets are welcome. We allow cats, dogs under 30 pounds, and all service animals. Please let us know about your pets before booking. You can find more information in our campground rules here: <a href={parkRules} target="_blank" rel="noopener noreferrer">campground rules</a>.
      </>
    ),
  },
  {
    title: 'What school are nearby Hidden Acres?',
    content: () => (
      <>
        The schools around us include: <a href="https://www.princetonisd.net/harper" target="_blank" rel="noopener noreferrer">Harper Elementary School</a>, <a href="https://www.princetonisd.net/Domain/148" target="_blank" rel="noopener noreferrer">Clark Jr High School</a>, and <a href="https://www.princetonisd.net/Domain/52" target="_blank" rel="noopener noreferrer">Princeton High School</a>. All of which are in Princeton ISD.
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
          More information can be found in our campground rules: <a href={parkRules} target="_blank" rel="noopener noreferrer">campground rules</a>.
      </>
    ),
  },
  {
    title: 'What rules does Hidden Acres have?',
    content: () => (
      <>
        You can find our campground rules here: <a href={parkRules} target="_blank" rel="noopener noreferrer">campground rules</a>.
      </>
    ),
  },
  {
    title: 'What are the lot fees at Hidden Acres?',
    content: () => (
      <>
        Lot fees start at $50 a night for daily visitors. More information about rates can be found in our <a href="https://app.fireflyreservations.com/reserve?propertyGUID=8b116da5-c2e9-45e4-acc7-e64ab4e5f601"> Reservation Portal</a>.
      </>
    ),
  },
  {
    title: 'How can I join the waitlist at Hidden Acres?',
    content: () => (
      <>
        You can join our waitlist here: <a href="https://app.fireflyreservations.com/reserve/joinwaitlist?propertyGUID=8b116da5-c2e9-45e4-acc7-e64ab4e5f601"> Hidden Acres Waitlist</a>. We will contact you as soon as space is available.
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
