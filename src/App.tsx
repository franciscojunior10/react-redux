import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Catalog from './components/Catalog';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Catalog />
    </Provider>
  );
};

export default App;
