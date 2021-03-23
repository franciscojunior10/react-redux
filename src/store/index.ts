import { createStore } from 'redux';
import { ICartState } from './modules/cart/props';
import rootReducer from './modules/rootReducer';

export interface IState {
  cart: ICartState;
}

const store = createStore(rootReducer);

export default store;
