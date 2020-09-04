import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Reservation = () => (
  <StaticQuery
    query={graphql`
      query {
        signage_big_sign: file(
          sourceInstanceName: { eq: "signage" }
          name: { eq: "big_sign" }
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
      <Section id="reservation" accent>
          <Container>
            <Grid>
              <Art>
                <Img fluid={data.signage_big_sign.childImageSharp.fluid} />
              </Art>
              <Text>
                <h1>
                  A quiet
                  <br />
                  and friendly
                  <br />
                  place to relax.
                </h1>
                <br />
                <p>
                  <StyledExternalLink href="https://app.fireflyreservations.com/reserve?propertyGUID=b28521e1-060f-4b0b-a205-821d4aa3f37f">
                    Book a Reservation &nbsp;&#x2794;
                  </StyledExternalLink>
                </p>
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

export default Reservation;
