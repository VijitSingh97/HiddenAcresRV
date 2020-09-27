import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        park_hidden: file(
          sourceInstanceName: { eq: "park" }
          name: { eq: "hidden" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        park_close: file(
          sourceInstanceName: { eq: "park" }
          name: { eq: "close" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        park_space: file(
          sourceInstanceName: { eq: "park" }
          name: { eq: "space" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about" accent='secondary'>
        <Container>
          <Grid>
            <div>
              <h2>Quiet and Friendly</h2>
              <p>
                Clear view of the stars at night. Surrounded by Lake Lavon on two sides.
                Enjoy the company of a small community of 24 RVs.
              </p>
            </div>
            <Art>
              <Img fluid={data.park_hidden.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.park_close.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Suburban Staples Nearby</h2>
              <p>
                Located on Lake Lavon just 15 miles east of Plano, and 15 miles south east of McKinney. 
                Close to boat ramps and swimming areas. Downtown Dallas is a short 30 minute drive.
                You are only 15 minutes to major mall, movie complex and restaurants. Gas and propane are nearby.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Renowned Local Attractions</h2>
              <p>
              There are several local and fun attractions located within a short drive of the RV park! The Allen outlet mall,
              the American Airlines Center, the Fairview Town Center, Firewheel Town Center, Hawaiian Falls water park,
              the Mesquite Championship Rodeo, the President George W. Bush Library, Southfork Ranch, In-Sync Exotic Animal Zoo,
              the Heard Natural Science Museum & Wildlife Sanctuary, and so much more!
              </p>
            </div>
            <Art>
              <Img fluid={data.park_space.childImageSharp.fluid} />
            </Art>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
