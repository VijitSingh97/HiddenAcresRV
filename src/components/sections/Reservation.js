import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

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
      <ReservationSection id="reservation" accent>
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
                  <a href="https://app.fireflyreservations.com/reserve?propertyGUID=8b116da5-c2e9-45e4-acc7-e64ab4e5f601">
                    Click here to reserve&nbsp;&#x2794;
                  </a>
                </p>
                <br />
                <p>
                  <a href="https://app.fireflyreservations.com/reserve/joinwaitlist?propertyGUID=8b116da5-c2e9-45e4-acc7-e64ab4e5f601">
                    Click here to join our waitlist&nbsp;&#x2794;
                  </a>
                </p>
                <br />
                <h4>  
                  More lots now available!
                </h4>
              </Text>
            </Grid>
          </Container>
      </ReservationSection>
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
  grid-gap: 100px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 0px;

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

const ReservationSection = styled(Section)`

@media (max-width: ${props => props.theme.screen.md}) {
  padding: 100px 0;
}

`;

export default Reservation;
