import React from 'react';

import Layout from '@common/Layout';
import { Container } from '@components/global';
import RegistrationForm from '@forms/Registration';


const RegistrationPage = ({ data }) => (
    <Layout>
        <Container>
            {/* <h1>It's me, Registration Page!</h1> */}
            <RegistrationForm />
        </Container>
    </Layout>
);

export default RegistrationPage;
