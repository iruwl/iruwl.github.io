// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata, usePostsList } from '../hooks';

const KintakaTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const posts = usePostsList();

  return (
    <Layout title={`Kintaka - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Kintaka">
        <ul>
          {posts.map((post) => (
            <li key={post.node.id}>
              <span style={{'color':'#a6a6a6'}}>{post.node.frontmatter.date}</span>&nbsp;
              <Link to={post.node.frontmatter.slug}>
                {post.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  );
};

export default KintakaTemplate;
