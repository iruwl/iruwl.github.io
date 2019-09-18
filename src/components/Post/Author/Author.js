// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        {/*author.bio*/}
        "Hail Dump and Die Developer"
        <a
          className={styles['author__bio-twitter']}
          href="https://ko-fi.com/irul99"
          rel="noopener noreferrer"
          target="_blank"
        >
          Traktir <strong>{author.name}</strong> kopi
        </a>
      </p>
    </div>
  );
};

export default Author;
