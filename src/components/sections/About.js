import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';
import { OutboundLink } from "gatsby-plugin-google-analytics"

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
                Clear view of the stars at night.
                Surrounded by Lake Lavon, lush trees, and with beach access. 
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
                Located on Lake Lavon! 10 miles east of Allen, 15 miles southeast of McKinney, 15 miles east of Plano, and 20 miles northeast of Dallas.
                5 minute walk to the beach, fishing, and swimming. Close to boat ramps. You are only 15 minutes to major mall, movie complex and restaurants. 
                Gas and propane are nearby.
              </p>
            </div>
          </Grid>
          <Grid inverse>
            <div>
              <h2>Renowned Local Attractions</h2>
              <p>
                There are several local and fun attractions located within a short drive of the RV park:
                <ul>
                    <li><OutboundLink href="https://flyppc.com" target="_blank">Future Flight Powered Parachutes</OutboundLink></li>
                    <li><OutboundLink href="https://hfalls.com" target="_blank">Hawaiian Falls Water Park</OutboundLink></li>
                    <li><OutboundLink href="https://www.insyncexotics.org" target="_blank">In-Sync Exotic Animal Zoo</OutboundLink></li>
                    <li><OutboundLink href="https://www.heardmuseum.org" target="_blank">Heard Natural Science Museum & Wildlife Sanctuary</OutboundLink></li>
                    <li><OutboundLink href="https://www.georgewbushlibrary.smu.edu" target="_blank">President George W. Bush Library</OutboundLink></li>
                    <li><OutboundLink href="https://collinoakswinery.com" target="_blank">Collin Oaks Winery</OutboundLink></li>
                    <li><OutboundLink href="https://www.southforkranch.com" target="_blank">Southfork Ranch</OutboundLink></li>
                    <li><OutboundLink href="https://www.heritagefarmstead.org" target="_blank">Heritage Farmstead</OutboundLink></li>
                    <li><OutboundLink href="https://mesquiterodeo.com" target="_blank">Mesquite Championship Rodeo</OutboundLink></li>
                    <li><OutboundLink href="http://www.americanairlinescenter.com" target="_blank">American Airlines Center</OutboundLink></li>
                    <li><OutboundLink href="https://www.premiumoutlets.com/outlet/allen" target="_blank">Allen Premium Outlet Mall</OutboundLink></li>
                    <li><OutboundLink href="https://www.fairviewtowncenter.com" target="_blank">Fairview Town Center</OutboundLink></li>
                    <li><OutboundLink href="https://www.simon.com/mall/firewheel-town-center" target="_blank">Firewheel Town Center</OutboundLink></li>
                    
                    <li>and so much more!</li>
                </ul>
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
