// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata, useCategoriesList } from '../hooks';

const CategoriesListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const categories = useCategoriesList();

  return (
    <Layout title={`Kategori - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Kategori">
        <ul>
          {categories.map((category) => (
            <li key={category.fieldValue}>
              <Link to={`/kategori/${kebabCase(category.fieldValue)}/`}>
                {category.fieldValue}
              </Link>
              &nbsp;<span style={{'color':'#a6a6a6'}}>({category.totalCount})</span>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default CategoriesListTemplate;
