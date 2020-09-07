import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Reservation from '@sections/Reservation';
import Location from '@sections/Location';
import About from '@sections/About';
import Amenities from '@sections/Amenities';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Reservation />
    <Location />
    <About />
    <Amenities />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
