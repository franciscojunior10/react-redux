import React, { FC, useEffect, useState } from 'react';
import api from '../../services/api';
import { IProduct } from '../../store/modules/cart/props';
import CatalogItem from './CatalogItem';

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
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Catalog;
