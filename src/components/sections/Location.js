import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import { Section, Container } from '@components/global';


const Location = () => (
    <Section id="about" accent='secondary'>
        <Container>
            <Grid>
                <div>
                    <h2>Quiet and Friendly</h2>
                    <p>
                        No freeway - no railroad - no street lights. Clear view of the stars at night. 
                        Enjoy the company of a small community of 24 RVs.
                    </p>
                </div>

                {data.staticMap.childFile.childImageSharp.fluid}
            </Grid>
        </Container>
    </Section>
);

export const mapQuery = graphql`
    query StaticMapQuery {
        staticMap {
            childFile {
                childImageSharp {
                    fluid {
                        # or fixed
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`

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
  }
`;

export default Location;
