import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {  FilterContextProvider} from "./context/filterContext";

ReactDOM.render(
  <FilterContextProvider>
    <App />
  </FilterContextProvider>,
  document.getElementById('root')
);

