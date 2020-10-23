import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { OutboundLink } from "gatsby-plugin-google-analytics"

import { Section, Container } from '@components/global';
// import ExternalLink from '@common/ExternalLink';

const ContactUs = ({data}) => (
  <Section id="contactus" accent='secondary'>
          <Container>
            <Grid>
                <OutboundLink href="https://goo.gl/maps/Fe2zQ4k8zSDXjGBq8">
                    <Art>
                        <Img fluid={ data.staticMap.childFile.childImageSharp.fluid } />
                    </Art>
                </OutboundLink>
              <Text>
              <h1>
                  Find us at:
              </h1>
              <br />
              <h2>
                <OutboundLink href="https://goo.gl/maps/5jtXzJ2n8rnDhJY37">
                  10364 County Rd. 740 
                  <br />
                  Princeton, TX 75407
                </OutboundLink>
              </h2>
              <br />
              <br />
              <br />
              <h1>
                  Feel free to
                  <br />
                  contact us:
              </h1>
              <br />
              
              <h2>
                  <OutboundLink href="tel:9727361264">(972) 736-1264</OutboundLink>
              </h2>
              </Text>
            </Grid>
          </Container>
      </Section>
);

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: stsignage;
  }
`;

// const StyledExternalLink = styled(ExternalLink)`
//   color: inherit;
//   text-decoration: none;

//   &:hover {
//     color: ${props => props.theme.color.black.regular};
//   }
// `;

export default ContactUs;
