import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Reservation from '@sections/Reservation';
import About from '@sections/About';
import Amenities from '@sections/Amenities';
import ContactUs from '@sections/ContactUs'
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';
import styled from 'styled-components';

import { graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <Layout>
    <Navbar />
    <Reservation />
    <About />
    <Amenities />
    <ContactUs data={data}/>
    <Faq />
    <Footer />
  </Layout>
);

export const googleMaps = graphql`
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

export default IndexPage;
