// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles['author']}>
    {<Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        alt={author.name}
      />
    </Link>
    }

    <h1 className={styles['author__title']}>
      <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      &nbsp;
      <span style={{'font-weight': 'normal', 'color': 'grey'}}>&lt;!--{author.bio}--&gt;</span>
    </h1>
  </div>
);

export default Author;
