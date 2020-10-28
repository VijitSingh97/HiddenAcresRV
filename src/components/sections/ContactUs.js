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
              <h2>
                  Find us at:
              </h2>
              <h3>
                <OutboundLink href="https://goo.gl/maps/5jtXzJ2n8rnDhJY37">
                  10364 County Rd. 740 
                  <br />
                  Princeton, TX 75407
                </OutboundLink>
              </h3>
              <br />
              <br />
              <h2>
                  Contact us at:
              </h2>
              <h3>
                  <OutboundLink href="tel:9727361264">(972) 736-1264</OutboundLink>
              </h3>
              <h3>
                  <OutboundLink href="mailto:reservations@hiddenacresrv.com">reservations@hiddenacresrv.com</OutboundLink>
              </h3>
              <br />
              <br />
              <h2>
                  Take a tour:
              </h2>
              <h3>
                  <OutboundLink href="https://goo.gl/maps/9URNXTdFGi63TMXj7">Take a 360&#176; Virtual Tour!&nbsp;&#x2794;</OutboundLink>
              </h3>
              <br />
              <br />
              <h2>
                  Leave us a Review:
              </h2>
              <h3>
                  <OutboundLink href="https://g.page/r/CWAoWnxskFyyEAg/review">Google Reviews&nbsp;&#x2794;</OutboundLink>
              </h3>
              <h3>
                  <OutboundLink href="https://www.yelp.com/writeareview/biz/qKQpj62kyAdPpIJ_D1CDQQ?return_url=%2Fbiz%2FqKQpj62kyAdPpIJ_D1CDQQ&source=biz_details_war_button">Yelp Reviews&nbsp;&#x2794;</OutboundLink>
              </h3>
              </Text>
            </Grid>
          </Container>
      </Section>
);

const Art = styled.figure`
  width: 95%;
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
    justify-self: auto;
  }
`;

export default ContactUs;
