import React, { FC, useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import api from '../../services/api';
import { addProductToCart } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/props';

// import { Container } from './styles';

const Catalog: FC = () => {
  const dispach = useDispatch();
  const [catlog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('/products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  const handleAddProductToCar = useCallback(
    (product: IProduct) => {
      dispach(addProductToCart(product));
    },
    [dispach],
  );

  return (
    <main>
      <h1>Catálogo</h1>

      {catlog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {' - '}
          <span>{product.price}</span>
          <button type="button" onClick={() => handleAddProductToCar(product)}>
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
};

export default Catalog;
