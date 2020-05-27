import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './Redux/ReduxStore';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';



let rerenderEntireThree = () => {
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider> 
  </BrowserRouter>,
  document.getElementById('root')
);




serviceWorker.unregister();
}

rerenderEntireThree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireThree(state);
});

window.store = store;

