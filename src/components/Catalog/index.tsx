import React, { FC, useState, useEffect } from 'react';
import api from '../../services/api';
import { IProduct } from '../../store/modules/cart/props';

// import { Container } from './styles';

const Catalog: FC = () => {
  const [catlog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('/products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main>
      <h1>Catálogo</h1>

      {catlog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {' - '}
          <span>{product.price}</span>
          <button type="button">Comprar</button>
        </article>
      ))}
    </main>
  );
};

export default Catalog;
