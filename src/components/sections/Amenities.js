import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const AMENITIES = [
  {
    name: 'Ample Space for all RVs',
    image: 'ample_space.jpg',
    role: 'Park in your RV in our large spaces',
  },
  {
    name: 'Laundry Room',
    image: 'laundry.jpg',
    role: 'Washer and dryer in the park',
  },
  {
    name: '20, 30, and 50 Amp Hookups',
    image: 'electrical.jpg',
    role: 'Free electricity for daily and weekly visitors',
  },
  {
    name: '24\' L x 20\' W Parking per lot',
    image: 'parking.jpg',
    role: 'Accommodates 2-3 cars',
  },
  {
    name: 'High Speed Internet',
    image: 'internet.jpg',
    role: 'Included in all reservations',
  },
  {
    name: 'Walk to the Lake Front',
    image: 'beach.jpg',
    role: 'Relax and enjoy the calm water',
  },
  {
    name: 'Boat Docks Neaby',
    image: 'dock.jpg',
    role: 'Easy to access',
  },
  {
    name: 'Proximity to Public Parks',
    image: 'park.jpg',
    role: 'Open areas near the lake',
  },
  
];

const Amenities = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "amenities" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        signage_740_sign: file(
          sourceInstanceName: { eq: "signage" }
          name: { eq: "740_sign" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="amenities" accent>
        <StyledContainer style={{ position: 'relative' }}>
          <h1>Arranged for your Convenience</h1>
          <AmenitiesGrid>
            {AMENITIES.map(({ name, image, role }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div key={name}>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                </div>
              );
            })}
          </AmenitiesGrid>
          <Art>
            <Img fluid={data.signage_740_sign.childImageSharp.fluid} />
          </Art>
          <ArtMobile>
            <Img fluid={data.signage_740_sign.childImageSharp.fluid} />
          </ArtMobile>
        </StyledContainer>
      </Section>
    )}
  />
);

const StyledContainer = styled(Container)`
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${props => props.theme.screen.xs}) {
    margin-bottom: 150px;
  }

  @media (max-width: ${props => props.theme.screen.xxs}) {
    margin-bottom: 75px;
  }
`;

const AmenitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 10%;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 50%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Amenities;
