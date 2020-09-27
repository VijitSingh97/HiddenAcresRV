import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const ContactUs = () => (
  <StaticQuery
    query={graphql`
      query {
        map_apple_maps: file(
          sourceInstanceName: { eq: "map" }
          name: { eq: "apple-maps" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="contactus" accent='secondary'>
          <Container>
            <Grid>
              <Art>
                <Img fluid={data.map_apple_maps.childImageSharp.fluid} />
              </Art>
              <Text>
              <h1>
                  Find us at:
              </h1>
              <br />
              <h2>
                  10364 County Rd. 740 
                  <br />
                  Princeton, TX 75407
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
                  (972) 736-1264
              </h2>
              </Text>
            </Grid>
          </Container>
      </Section>
    )}
  />
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

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default ContactUs;
