import React, { FC, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCartRequest } from '../../../store/modules/cart/actions';

import { CatalogItemProps } from './props';

const CatalogItem: FC<CatalogItemProps> = ({ product }) => {
  const dispach = useDispatch();

  const handleAddProductToCar = useCallback(() => {
    dispach(addProductToCartRequest(product));
  }, [dispach, product]);

  return (
    <article>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span>
      <button type="button" onClick={handleAddProductToCar}>
        Comprar
      </button>
    </article>
  );
};

export default CatalogItem;
