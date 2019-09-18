// @flow strict
import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';
import 'moment/locale/id';

type Props = {
  date: string
};

const Meta = ({ date }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>Terbit {moment(date).format('D MMMM YYYY')}</p>
  </div>
);

export default Meta;
