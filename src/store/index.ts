import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ICartState } from './modules/cart/props';
import rootReducer from './modules/rootReducer';

export interface IState {
  cart: ICartState;
}

const store = createStore(rootReducer, composeWithDevTools());

export default store;
