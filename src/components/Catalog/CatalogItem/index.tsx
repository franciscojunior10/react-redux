import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../../store';
import { addProductToCartRequest } from '../../../store/modules/cart/actions';

import { CatalogItemProps } from './props';

const CatalogItem: FC<CatalogItemProps> = ({ product }) => {
  const dispach = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

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
      {hasFailedStockCheck && (
        <span style={{ color: 'red' }}>Falta de estoque</span>
      )}
    </article>
  );
};

export default CatalogItem;
