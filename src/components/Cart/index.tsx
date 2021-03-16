import React from 'react';
import { useSelector } from 'react-redux';

// import { Container } from './styles';

const Cart: React.FC = () => {
  // eslint-disable-next-line no-shadow
  const state = useSelector(state => state);

  console.log(state);

  return (
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>SubTotal</th>
        </tr>
      </thead>
      <tbody />
    </table>
  );
};

export default Cart;
