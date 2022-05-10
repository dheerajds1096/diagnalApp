import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({reducer: reducer})

const container = document.getElementById('root');
const root = createRoot(container);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)
root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
