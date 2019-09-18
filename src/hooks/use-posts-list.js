// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const usePostsList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PostsQuery {
        allMarkdownRemark(filter: {frontmatter: {template: {eq: "post"}}}) {
          edges {
            node {
              frontmatter {
                title
                slug
                date(formatString: "DD-MM-YYYY")
              }
              id
            }
          }
        }
      }
    `
  );

  return allMarkdownRemark.edges;
};

export default usePostsList;
