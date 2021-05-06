import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css'
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import { loadWishboards } from './actions/boardActions';

const store = configureStore();

store.dispatch(loadWishboards());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
,
  document.getElementById('root')
);
