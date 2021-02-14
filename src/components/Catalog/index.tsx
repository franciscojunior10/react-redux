import React, { FC } from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

const Catalog: FC = () => {
  const catalog = useSelector(state => state);

  console.log(catalog);

  return <h1>hello world</h1>;
};

export default Catalog;
