// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`404 - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="404">
        <p>Halaman tidak ditemukan.</p>
      </Page>
    </Layout>
  );
};

export default NotFoundTemplate;
