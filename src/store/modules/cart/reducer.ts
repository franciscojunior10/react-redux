import { Reducer } from 'redux';
import { ICartState } from './props';

const INITIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = () => {
  return INITIAL_STATE;
};

export default cart;
