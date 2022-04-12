import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import configureStore from 'src/store';
import GlobalStyles from './GlobalStyles';

const { store, persistor } = configureStore();

const Root = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <App />
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
