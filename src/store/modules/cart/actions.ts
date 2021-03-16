/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { IProduct } from './props';

export function addProductToCart(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    payload: {
      product,
    },
  };
}
