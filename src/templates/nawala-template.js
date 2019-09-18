// @flow strict
import React from 'react';
import { Link } from 'gatsby';
// import kebabCase from 'lodash/kebabCase';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import NawalaForm from '../components/NawalaForm'
import { useSiteMetadata, useCategoriesList } from '../hooks';

const NawalaTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  return (
    <Layout title={`Nawala - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Nawala">
        <p>Beberapa kali membuat blog dengan niat menggebu-gebu untuk menulis kebanyakan kandas ditengah jalan. Jangan sia-siakan waktu untuk menulis alamat <i>email</i> Anda pada formulir di bawah ini kecuali Anda nekat.</p>
        <NawalaForm />
      </Page>
    </Layout>
  );
};

export default NawalaTemplate;
